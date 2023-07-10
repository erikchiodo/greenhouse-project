import styled from "@emotion/styled";
import { Box, Text, Select, Input, Textarea } from "@chakra-ui/react";

// icons
import { MdLocationPin, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <main>
     {/* Contact Section Wrapper */}
      <ContactWrapper as="div">
          {/* Contact Information Section */}
        <ContactInfoWrapper as="section">
          <h2 className="title">Store Information</h2>
          <ul>
               {/* Address- we could take out */}
            <li>
              <MdLocationPin fontSize={22} />
              <Text as="p">123 Main Street,New York NY,10023 USA</Text>
            </li>
            <li>
               {/* contact/store Email */}
              <MdEmail fontSize={22} />
              <Text as="p">support@greenhouse.com</Text>
            </li>
          </ul>
        </ContactInfoWrapper>
         {/* Contact Form Section */}
        <ContactFormWrapper as="section">
          <h2 className="title">Contact Us</h2>
          <form>
               {/* Subject Select */}
            <div className="form-control">
              <label htmlFor="subject">Subject</label>
              <Select>
                <option value="customerService">Customer Service</option>
              </Select>
            </div>
            {/* Email Input */}
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <Input type="email" placeholder="you@email.com" />
            </div>
            {/* Attachment Input */}
            <div className="form-control">
              <label htmlFor="attachment">Attachment</label>
              <Input type="file" />
            </div>
            {/* Message Textarea */}
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <Textarea placeholder="Enter your message"></Textarea>
            </div>
            {/* Submit Button */}
            <button type="submit">Send</button>
          </form>
        </ContactFormWrapper>
      </ContactWrapper>
    </main>
  );
}

const ContactWrapper = styled(Box)`
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 5px;
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoWrapper = styled(Box)`
  & .title {
    font-weight: bolder;
    font-size: 16px;
    text-transform: uppercase;
  }
  & ul li {
    display: flex;
    align-items: center;
    gap: 20px;
    color: gray;
    margin-top: 20px;

    & p {
      color: black;
    }
  }
`;

const ContactFormWrapper = styled(Box)`
  flex: 1;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 5px;

  & .title {
    font-weight: bolder;
    font-size: 16px;
    text-transform: uppercase;
  }

  & form {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & button[type="submit"] {
      align-self: flex-end;
      margin-top: 20px;
      padding: 10px 18px;
      background: #333333;
      color: white;
      border-radius: 5px;
    }
  }

  & .form-control {
    display: flex;
    align-items: center;
    gap: 20px;

    & label {
      max-width: 100px;
      width: 100%;
      font-size: 14px;
      font-weight: bold;
    }

    & input,
    & textarea {
      background: #eee;
    }
  }

  @media (max-width: 478px) {
    & .form-control {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }
`;

