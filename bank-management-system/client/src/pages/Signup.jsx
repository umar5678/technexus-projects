import React from "react";
import { Container, SignupForm } from "../components";

const Signup = () => {
  return (
    <div className="w-full py-8">
          <Container>
              <div className=" my-auto">
        <SignupForm />
                  
              </div>
      </Container>
    </div>
  );
};

export default Signup;
