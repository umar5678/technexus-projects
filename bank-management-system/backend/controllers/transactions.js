import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user-model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Transaction } from "../models/transaction-modal.js";
import { Notification } from "../models/notification-model.js";

const getAllTransactions = asyncHandler(async (req, res, next) => {
  // get user from req.user
  // find all the transactions whois user id match user._id
  // send respons
    const allTransactions = await Transaction.find({ user: req.user._id })
    
    if (!allTransactions) throw new ApiErrorr(404, "tansaction find error")
    
    return res.status(200).json(new ApiResponse(200, allTransactions))
});


const sendMoney = asyncHandler(async (req, res, next) => {
    const { receiverAccountNumber, amount } = req.body;
  const user = req.user; // Assuming req.user contains authenticated user info

  // Validate input
  if (!receiverAccountNumber || !amount) {
    throw new ApiError(400, "Missing required fields");
  }

  // Find the recipient
  const receiver = await User.findOne({ accountNumber: receiverAccountNumber }).select("-password");
  if (!receiver) {
    throw new ApiError(404, "Recipient not found");
  }
    const sender = await User.findById(user._id).select("-password")
if(!sender) throw new ApiError(404, "sender not found")
  // Check sender's balance
  if (sender.balance < amount) {
    throw new ApiError(400, "Insufficient balance");
  }

  // Update balances
  sender.balance -= amount;
  receiver.balance += amount;
  await Promise.all([sender.save(), receiver.save()]);

  // Create transactions
  const senderTransaction = new Transaction({
    from: sender.firstName,
    to: receiver.firstName,
    senderAccountNumber: sender.accountNumber,
    receiverAccountNumber: receiver.accountNumber,
    amount,
    transactionType: "send",
    user: sender._id,
  });

  const receiverTransaction = new Transaction({
    from: sender.firstName,
    to: receiver.firstName,
    senderAccountNumber: sender.accountNumber,
    receiverAccountNumber: receiver.accountNumber,
    amount,
    transactionType: "receive",
    user: receiver._id,
  });

  await Promise.all([senderTransaction.save(), receiverTransaction.save()]);

  // Create notifications
  const senderNotification = new Notification({
    user: sender._id,
    notificationMsg: `${amount} sent to ${receiver.name} acc: ${receiver.accountNumber}, Please refresh the page to see the updated balance`,
  });

  const receiverNotification = new Notification({
    user: receiver._id,
    notificationMsg: `${amount} received from ${sender.name} acc: ${sender.accountNumber}`,
  });

  await Promise.all([senderNotification.save(), receiverNotification.save()]);

    res.status(200).json(new ApiResponse(200, {}, "Transaction successful"));
})

export { getAllTransactions, sendMoney };

    //  get user from req.user
//   // get account numer of reciever , amount from req.body
//   // check if reciever exist
//   // check if user has enough balance
//   // update reciever balance
//   // then update sender balance
//   // create transaction for sender and reciever
//   // create notification for both
//   // send response
    
// transaction schema for sender

// from: Sender Name
//   to: receiver Name
//   senderAccountNumber
//   receiverAccountNumber
//   amount
//   transactionType: send
//   user: sender id

// transaction schema for receiver

// from: Sender Name
//   to: receiver Name
//   senderAccountNumber
//   receiverAccountNumber
//   amount
//   transactionType: receive
//   user: receiver id

// notify sender

// user: sender id
// notificationMsg: {amount} sent to {receiverNAme} acc: {receiverAcc}, Please refresh the page to see the updated balance

// notify receiver

// user: receiver id
// notificationMsg: {amount} received from {receiverNAme} acc: {senderAcc}


// const sendMoney = asyncHandler(async (req, res, next) => {
//   //  get user from req.user
//   // get account numer of reciever , amount from req.body
//   // check if reciever exist
//   // check if user has enough balance
//   // update reciever balance
//   // then update sender balance
//   // create transaction for sender and reciever
//   // create notification for both
//   // send response

//   const user = req.user;

//   const { receiverAccountNumber, amount } = req.body;

//   const sender = await User.findById(user._id).select("-password");
//   if (!sender) throw new ApiError(404, "sender not found");

//   const receiver = await User.findOne({
//     accountNumber: receiverAccountNumber,
//   }).select("-password");
//   if (!receiver) throw new ApiError(404, "Receiver Not Found");

//   if (sender.balance <= 500)
//     throw new ApiError(400, "Insufficient balane in sender account");

//   receiver.balance += amount;
//   sender.balance -= amount;
//   await receiver.save();
//   await sender.save();

//   // create transaction for sender
//   const transactionForSender = await Transaction.create({
//     from: sender.firstName,
//     to: receiver.firstName,
//     amount,
//     senderAccountNumber: sender.accountNumber,
//     receiverAccountNumber: receiver.accountNumber,
//     transactionType: "send",
//     user: sender._id,
//   });

//   // create transaction for receiver
//   const transactionForReceiver = await Transaction.create({
//     from: sender.firstName,
//     to: receiver.firstName,
//     amount,
//     senderAccountNumber: sender.accountNumber,
//     receiverAccountNumber: receiver.accountNumber,
//     transactionType: "receive",
//     user: receiver._id,
//   });

//   receiver.transctions.push(transactionForReceiver._id);
//   sender.transctions.push(transactionForSender._id);
//   await receiver.save();
//   await sender.save();

//   // notify sender
//   const notificationForSender = await Notification.create({
//     user: sender._id,
//     notificationMsg: `${amount} sent to ${receiver.firstName}, Acc: ${receiver.accountNumber}. Please refresh the page to see updated balance`,
//   });

//   const notificationForReceiver = await Notification.create({
//     user: receiver._id,
//     notificationMsg: `${amount} received from ${sender.firstName}, Acc: ${sender.accountNumber}`,
//   });

//   sender.notificaitions.push(notificationForSender._id);
//   receiver.notificaitions.push(notificationForReceiver._id);
//   await sender.save();
//   await receiver.save();

//   return res.status(200).json(new ApiResponse(200, notificationForSender));

//   // const [receiverAccountNumber, amount]
// });

// const sendMoney = asyncHandler(async (req, res, next) => {
//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();

//     const user = req.user;
//     const { receiverAccountNumber, amount } = req.body;
//     const sender = await User.findById(user._id).select("-password");
//     if (!sender) throw new ApiError(404, "sender not found");

//     if (sender.balance <= 500)
//       throw new ApiError(400, "Insufficient balane in sender account");
//     const receiver = await User.findOne({
//       accountNumber: receiverAccountNumber,
//     }).select("-password");
//     if (!receiver) throw new ApiError(404, "Receiver Not Found");

//     const result = await session.withTransaction(async () => {
//       try {
//         // Update sender and receiver balances within the transaction
//         const senderUpdate = await User.updateOne(
//           { _id: sender._id },
//           { $inc: { balance: -amount } },
//           { session }
//         );
//         if (senderUpdate.modifiedCount === 0) {
//           throw new ApiError(404, "Sender not found or balance not updated");
//         }

//         const receiverUpdate = await User.updateOne(
//           { _id: receiver._id },
//           { $inc: { balance: amount } },
//           { session }
//         );
//         if (receiverUpdate.modifiedCount === 0) {
//           throw new ApiError(404, "Receiver not found or balance not updated");
//         }

//         // Create transactions and notifications (as before, with { session })
//         const transactionForSender = await Transaction.create(
//           [
//             {
//               from: sender.firstName,
//               to: receiver.firstName,
//               amount,
//               senderAccountNumber: sender.accountNumber,
//               receiverAccountNumber: receiver.accountNumber,
//               transactionType: "send",
//               user: sender._id,
//             },
//           ],
//           { session }
//         );

//         const transactionForReceiver = await Transaction.create(
//           [
//             {
//               from: sender.firstName,
//               to: receiver.firstName,
//               amount,
//               senderAccountNumber: sender.accountNumber,
//               receiverAccountNumber: receiver.accountNumber,
//               transactionType: "receive",
//               user: receiver._id,
//             },
//           ],
//           { session }
//         );

//         sender.transactions.push(transactionForSender[0]._id);
//         receiver.transactions.push(transactionForReceiver[0]._id);
//         await sender.save({ session });
//         await receiver.save({ session });

//         const notificationForSender = await Notification.create(
//           [
//             {
//               user: sender._id,
//               notificationMsg: `${amount} sent to ${receiver.firstName}, Acc: ${receiver.accountNumber}. Please refresh the page to see updated balance`,
//             },
//           ],
//           { session }
//         );

//         const notificationForReceiver = await Notification.create(
//           [
//             {
//               user: receiver._id,
//               notificationMsg: `${amount} received from ${sender.firstName}, Acc: ${sender.accountNumber}`,
//             },
//           ],
//           { session }
//         );

//         sender.notificaitions.push(notificationForSender[0]._id);
//         receiver.notificaitions.push(notificationForReceiver[0]._id);
//         await sender.save({ session });
//         await receiver.save({ session });

//         return { notificationForSender: notificationForSender[0] };
//       } catch (innerError) {
//         // Important: Throw the error to trigger the outer catch block
//         throw innerError;
//       }
//     });

//     await session.commitTransaction(); // Commit only if everything succeeded
//     return res
//       .status(200)
//       .json(new ApiResponse(200, result.notificationForSender));
//   } catch (error) {
//     await session.abortTransaction(); // Abort if ANY error occurred
//     console.error("Transaction aborted:", error);
//     next(error);
//   } finally {
//     session.endSession(); // ALWAYS end the session
//   }
// });