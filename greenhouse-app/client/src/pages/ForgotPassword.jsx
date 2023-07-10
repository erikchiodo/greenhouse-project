import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <MainWrapper>
     {/* Title */}
     <h2 className="title">Forgot Your Password?</h2>

{/* Form */}
<FormWrapper as="section">
  <form>
    {/* Subtitle */}
    <p className="subtitle">
      Please enter the email address you used to register. You will receive
      a temporary link to reset your password.
    </p>

    <div className="form-control">
      {/* Email Address Label */}
      <label>Email Address</label>
      <input type="email" />

      {/* Send Reset Link Button */}
      <button type="submit">Send Reset Link</button>
    </div>
  </form>
</FormWrapper>

{/* Back To Login Link */}
<Link className="back-to-login" to="/login">
  &lt; Back To Login
</Link>
</MainWrapper>
);
}

  // Styled Components

const MainWrapper = styled.main`
max-width: 1200px;
margin: 60px auto;

.title {
  font-weight: bold;
  font-size: 24px;
}

.back-to-login {
  color: #0f83ff;
  margin-top: 30px;
  display: block;
}
`;

const FormWrapper = styled(Box)`
box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
padding: 20px;
border-radius: 5px;
margin-top: 40px;

.subtitle {
  color: gray;
  font-size: 17px;
}

.form-control {
  margin: 20px auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;

  input {
    border: 1px solid lightgray;
    background: var(--light-bg);
    padding: 8px;
    flex: 1;
    margin: 0 0 0 20px;
  }

  button {
    padding: 8px;
    background: #333;
    color: white;
    flex: 0.5;
    border: 1px solid #333;
  }
}

@media (max-width: 768px) {
  .form-control {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    input {
      margin: 0;
      width: 100%;
    }

    button {
      margin-top: 10px;
      width: 100%;
    }
  }
}
`;