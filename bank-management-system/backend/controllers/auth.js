import { User } from "../models/user-model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateAccountNumber } from "../utils/generateAccountNumber.js";

const register = asyncHandler(async (req, res, next) => {
  //  get user details from req.body
  // validate deails shoud not empty
  // check if user already exist
  // generate account number
  // create user in db, (note: before saving user, model will hash the password)
  // check if user is created or not
  // genfrate access token
  // send assecc token in cookie and user data in response

  const { firstName, lastName, email, password } = req.body;
  if ([email, firstName, password, email].some((v) => v?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  if (await User.findOne({ email })) {
    throw new ApiError(400, "User Already Exist");
  }

  const accountNumber = generateAccountNumber();

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    accountNumber,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(
      500,
      "Signup Error || Registration error from backend or database"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created Successfully"));
});

const login = asyncHandler(async (req, res, next) => {
  // get user details fron body
  // check if user exist
  // check if password is correct
  // if password is correct then generate JWT Token
  // extract password from return res of db and send it to client along with token

  const { email, password } = req.body;
  if ([email, password].some((v) => v?.trim() === "")) {
    throw new ApiError(400, "All field Required");
  }

  const existedUser = await User.findOne({ email });

  if (!existedUser) throw new ApiError(400, "User not found");

  if (!(await existedUser.isPasswordCorrect(password))) {
    throw new ApiError(401, "wrong credentials");
  }

  const rest = { ...existedUser._doc, password: undefined };

  const accessToken = existedUser.generateAccessToken();

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, rest, "Login Success"));
});

const logout = asyncHandler(async (req, res, next) => {
  //  clear cookies

  return res
    .status(200)
    .clearCookie("accessToken")
    .json(new ApiResponse(200, {}, "loged out"));
});

const verify = asyncHandler(async (req, res, next) => {
  return res.status(200).json(new ApiResponse(200, req.user, "varify success"));
});

export { register, login, logout, verify };
