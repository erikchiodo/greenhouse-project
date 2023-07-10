import styled from "@emotion/styled";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Input,
  InputRightAddon,
  InputGroup,
  FormHelperText,
} from "@chakra-ui/react";

export default function PersonalInfo() {
  return (
    <MainWrapper>
      <form>
        {/* Title */}
        <FormControlWrapper>
          <FormLabel>Title</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="Mr">Mr.</Radio>
              <Radio value="Mrs">Mrs.</Radio>
            </Stack>
          </RadioGroup>
        </FormControlWrapper>

        {/* First Name */}
        <FormControlWrapper>
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControlWrapper>

        {/* Last Name */}
        <FormControlWrapper>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControlWrapper>

        {/* Email */}
        <FormControlWrapper>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControlWrapper>

        {/* Password */}
        <FormControlWrapper>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type="password" />
            <InputRightAddon>Show</InputRightAddon>
          </InputGroup>
        </FormControlWrapper>

        {/* Date Of Birth */}
        <FormControlWrapper>
          <FormLabel>Date Of Birth</FormLabel>
          <Input type="date" />
          <FormHelperText>Optional</FormHelperText>
        </FormControlWrapper>

        {/* Shipping Address */}
        <FormControlWrapper>
          <FormLabel>Shipping Address</FormLabel>
          <Input type="text" />
        </FormControlWrapper>

        {/* Billing Address */}
        <FormControlWrapper>
          <FormLabel>Billing Address</FormLabel>
          <Input type="text" />
        </FormControlWrapper>

        <button type="submit">Save</button>
      </form>
    </MainWrapper>
  );
}

// Styled components

const MainWrapper = styled.main`
  form {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;

    button[type="submit"] {
      padding: 12px 18px;
      background: var(--green-medium);
      color: white;
      border-radius: 5px;
      align-self: flex-end;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    & form {
      gap: 10px;
    }

    & form button[type="submit"] {
      align-self: center;
    }
  }
`;

const FormControlWrapper = styled(FormControl)`
  display: flex;
  gap: 20px;
  align-items: center;

  & label {
    max-width: 150px;
    width: 100%;
    text-align: right;
  }

  & input {
    background: #eee;
    border-radius: 3px;
    border: 1px solid lightgray;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;

    & label {
      text-align: left;
      max-width: 100%;
    }
  }
`;
