/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// Styled component for the category box
const CategoryBox = styled(Box)`
  flex: 1 1 250px;
  width: 100%;
  background: url(${(props) => props.imagepath});
  background-size: cover;
  padding: 20px;
  border-radius: 5px;

  & > p {
    font-size: 14px;
  }
  & > h3 {
    font-size: 22px;
    font-weight: 500;
    max-width: 100px;
    margin: 10px 0;
  }
  & > a {
    display: inline-block;
  }
  & > a::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: var(--green-light);
  }
`;
// Category component
export default function Category({ image, title, subtitle, link }) {
     return (
       <CategoryBox imagepath={image}>
         <p>{subtitle}</p>
         <h3>{title}</h3>
         <Link to={link}>Shop Now</Link>
       </CategoryBox>
     );
   }