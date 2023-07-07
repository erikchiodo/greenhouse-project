import { VStack, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// assets
import Logo from "../../assets/logo.png";


// icons
import { MdFacebook } from "react-icons/md";
import {
  PiInstagramLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

export default function Footer() {
     return (
       <FooterWrapper>
         <VStack>
           <BoxWrapper as="section">
              {/* Logo section */}
             <LogoContainer>
               <img src={Logo} alt="Greenhouse" />
                {/* Social Links Section */}
               <div className="social-links">
                 <Link to="/">
                   <MdFacebook fontSize={22} />
                 </Link>
                 <Link to="/">
                   <PiInstagramLogoFill fontSize={22} />
                 </Link>
                 <Link to="/">
                   <PiTwitterLogoFill fontSize={22} />
                 </Link>
                 <Link to="/">
                   <PiYoutubeLogoFill fontSize={22} />
                 </Link>
                  {/* PWA App Install Section */}
               </div>
               <button className="install-app">Install App</button>
             </LogoContainer>
             {/* Useful Links Section */}
             <LinksContainer>
               <h3>Useful Links</h3>
               <ul>
                 <li>
                   <Link to="/about">About</Link>
                 </li>
                 <li>
                   <Link to="/contact">Contact Us</Link>
                 </li>
                 <li>
                   <Link to="/faq">FAQ</Link>
                 </li>
                 <li>
                   <Link to="/">Privacy Policy</Link>
                 </li>
               </ul>
             </LinksContainer>
             {/* Account Links Section */}
             <LinksContainer>
               <h3>Your Account</h3>
               <ul>
                 <li>
                   <Link to="/login">LogIn</Link>
                 </li>
                 <li>
                   <Link to="/wishlist">WishList</Link>
                 </li>
                 <li>
                   <Link to="/profile">Personal Info</Link>
                 </li>
                 <li>
                   <Link to="/orders">Orders</Link>
                 </li>
               </ul>
             </LinksContainer>
           </BoxWrapper>
           {/* Copyright/any other msg Section */}
           <Box as="section">
             <CopyRightWrapper>
               Copyright @ <Link to="/">The DreamTeam</Link>. All Rights Reserved
             </CopyRightWrapper>
           </Box>
         </VStack>
       </FooterWrapper>
     );
   }

   // styled components

   //footer wrapper
   const FooterWrapper = styled.footer`
  background: var(--light-bg);
  border-top: 1px solid lightgray;
  padding: 40px 0;
  margin-top: 30px;
`;

//the box wrapper containing the footer sections
const BoxWrapper = styled(Box)`
display: flex;
flex-wrap: wrap;
gap: 30px;
max-width: 800px;
width: 100%;
justify-content: space-between;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;

//the logo container
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > img {
    max-width: 220px;
  }

  & .social-links {
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;

    & > a {
      color: gray;
      background: lightgray;
      border-radius: 50%;
      padding: 2px;
    }
  }

  & .install-app {
    padding: 5px;
    border-radius: 10px;
    color: white;
    background: black;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

//the links container
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: 17px;
    font-weight: 500;
  }

  & > ul {
    margin-top: 10px;
    & a {
      text-transform: uppercase;
      font-size: 12px;
    }

    & a:hover {
      color: var(--green-medium);
    }
  }
`;

//the copy-right wrapper
const CopyRightWrapper = styled(Box)`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  & > a {
    color: var(--green-medium);
  }
`;


