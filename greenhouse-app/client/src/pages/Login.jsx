import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

export default function Login() {
     const [showPassword, setShowPassword] = useState(false);
     const [error] = useState("");
     const togglePassword = () => {
       setShowPassword(!showPassword);
     };
   
     return (
       <Main>
           {/* Title */}
      <h2 className="title">Log in to your account</h2>
      {/* Login Form */}
      <LoginFormWrapper as="section">
        <form>
        {error && (
            <FormErrorWrapper className="form-error">
              <p>Authentication Failed</p>
            </FormErrorWrapper>
          )}
          {/* Email Input */}
          <FormControlWrapper>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControlWrapper>
          {/* Password Input */}
          <FormControlWrapper>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} />
              {/* Show/Hide Password */}
              <InputRightAddon onClick={togglePassword}>Show</InputRightAddon>
            </InputGroup>
          </FormControlWrapper>
          {/* Forgot Password */}
          <Link to="/forgotPassword">Forgot your password?</Link>
           {/* Sign In Button */}
          <button type="submit">Sign In</button>
        </form>
        {/* Register Redirect */}
        <p className="register-redirect">
          No account? <Link to="/register">Create one here</Link>
        </p>
      </LoginFormWrapper>
    </Main>
  );
}
// Styled components

//main container
const Main = styled.main`
  max-width: 1200px;
  margin: 60px auto;

  & .title {
    font-size: 22px;
    font-weight: bolder;
  }
`;

//the login form container
const LoginFormWrapper = styled(Box)`
  margin-top: 20px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;

  & form {
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & a {
      text-align: center;
      display: block;
    }

    & button[type="submit"] {
      padding: 10px 18px;
      border-radius: 5px;
      background: #333;
      color: white;
      border: none;
      outline: none;
    }
  }

  & .register-redirect {
    text-align: center;
    margin-top: 30px;

    & a {
      color: var(--green-medium);
    }
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

//form control wrapper
const FormControlWrapper = styled(FormControl)`
  display: flex;
  align-items: center;

  & label {
    max-width: 150px;
    text-align: right;
    width: 100%;
  }

  & input {
    border-radius: 5px;
    background: #eee;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;

    & label {
      text-align: left;
      max-width: 100%;
    }
  }
`;
//form error msg
const FormErrorWrapper = styled.div`
  & p {
    color: #881c24;
  }

  text-align: center;
  background: #f8d7da;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  align-self: stretch;
`;

