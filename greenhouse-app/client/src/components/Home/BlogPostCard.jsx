import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export default function BlogPostCard({
     title,
     shortDescription,
     image,
     date,
     link,
   }) {
     return (
          <CardWrapper maxW="sm">
            <CardBody>
              <Image src={image} alt={title} />
              <Stack mt="4" spacing={3}>
                <Heading as="h3" size={"md"}>
                  {title}
                </Heading>
                <Text as={"small"}>{date}</Text>
                <Text as="p">{shortDescription}</Text>
              </Stack>
            </CardBody>
            <Divider color={"lightgray"} />
            <CardFooter>
              <Link to={link}>Continue Reading</Link>
            </CardFooter>
          </CardWrapper>
        );
      }
      
      // Styled component
      const CardWrapper = styled(Card)`
        & p {
          font-size: 14px;
          color: gray;
          font-weight: 500;
        }
      
        & small {
          color: var(--green-light);
          font-weight: 600;
        }
      
        & a {
          font-size: 14px;
          font-weight: 600;
        }
      `;
      
      
      
      
      
      
      