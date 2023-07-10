import styled from "@emotion/styled";
import {
  Box,
  Card,
  Stack,
  CardBody,
  Text,
  Heading,
  CardFooter,
  Image,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// assets
import ProductImage from "../assets/products/product16.jpg";

// icons
import { PiPencilSimpleLineThin, PiHeartBold } from "react-icons/pi";
import { MdOutlineModeComment } from "react-icons/md";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGoogle,
  BiLogoPinterestAlt,
} from "react-icons/bi";

// components
import SearchBar from "../components/Shop/SearchBar";
import SectionTitle from "../components/shared/SectionTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EachProduct() {
  const [view, setView] = useState("reviews");
  const [showPanel, setShowPanel] = useState(false);

  const changeView = (v) => {
    setView(v);
  };

  const toggleReviewPanel = () => {
    setShowPanel(!showPanel);
  };

  const product = {
    image: ProductImage,
    title: "Wayfarer Messenger Bag",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa accusamus corporis necessitatibus error doloremque quo ea dicta vero tempore.",
    price: "33.90",
    rating: "4",
  };
  return (
    <main>
      <SearchBar />

      <ProductWrapper as="section">
        <SectionTitle title={"Product Name"} />
         {/* Product Card */}
        <Card
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          maxW="lg"
          className="product-card"
        >
          <Image objectFit="contain" src={product.image} alt="Caffe Latte" />

          <Stack className="card-text">
            <CardBody>
                {/* Product Details */}
              <Heading size="md" as="h3">
                {product.title}
              </Heading>
              <div className="rating">
                <p className="rating">{"⭐".repeat(product.rating)}</p>
                <Link to="/">
                  <MdOutlineModeComment />
                  Read reviews(4)
                </Link>
                <Link to="/">
                  <PiPencilSimpleLineThin />
                  Write a review
                </Link>
              </div>
              <h2 className="price">${product.price}</h2>

              <Text py="2" as="p" className="description">
                {product.description}
              </Text>

                {/* Add to Cart Form */}
              <form>
                <FormControl className="form-control">
                  <InputGroup className="input-group">
                    <FormLabel>Quantity</FormLabel>
                    <Input type="number" />
                  </InputGroup>
                  <button type="submit">Add To Cart</button>
                </FormControl>
              </form>
            </CardBody>

             {/* Card Footer */}
            <CardFooter className="card-footer">
              <button className="wishlist-btn">
                {" "}
                <PiHeartBold /> Add to wishlist
              </button>
              <div className="share-links">
                <Link to="/" className="facebook">
                  <BiLogoFacebook />
                  Share
                </Link>
                <Link to="/" className="tweet">
                  <BiLogoTwitter />
                  tweet
                </Link>
                <Link to="/" className="google">
                  <BiLogoGoogle />
                  Google+
                </Link>
                <Link to="/" className="pinterest">
                  <BiLogoPinterestAlt />
                  pinterest
                </Link>
              </div>
              <Link to="/" className="card-guide">
                Care Guide
              </Link>
            </CardFooter>
          </Stack>
        </Card>
         {/* Product Info */}
        <Stack className="product-info">
          <Box as="div" className="info-heading">
            <h3
              className={view === "details" ? "active" : ""}
              onClick={() => changeView("details")}
            >
              Product Details
            </h3>
            <h3
              className={view === "reviews" ? "active" : ""}
              onClick={() => changeView("reviews")}
            >
              Reviews
            </h3>
          </Box>
          {view === "reviews" ? (
            <Box as="div" className="review">
              <p className="grade">
                <strong>Grade</strong> {"⭐".repeat(5)}
              </p>
              <ul>
                <li>
                  <h4>postthemes</h4>
                  <p>03/10/2019</p>
                </li>
                <li>
                  <h4>Palaza</h4>
                  <p>themes</p>
                </li>
              </ul>
              <button className="write-review-btn" onClick={toggleReviewPanel}>
                Write Your Review!
              </button>
              {showPanel && <WriteReviewForm />}
            </Box>
          ) : (
            <Box as="div" className="details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quibusdam atque laboriosam eius eos natus voluptates tempore. Ex
                dolor possimus, recusandae cupiditate esse molestiae minus
                delectus expedita debitis sint corporis eveniet placeat labore
                minima dignissimos magnam explicabo, eius vitae neque dolorem
                tenetur cum. Veniam voluptatum repellendus adipisci dolores
                provident vitae!
              </p>
            </Box>
          )}
        </Stack>
      </ProductWrapper>
    </main>
  );
}

function WriteReviewForm() {
  return (
    <ReviewFormWrapper>
      <form>
        <div className="form-control">
          <label>Rating:</label>
          <div>{"⭐".repeat(5)}</div>
        </div>
        <div className="form-control">
          <label>Comment</label>
          <textarea cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </ReviewFormWrapper>
  );
}

// Styled components

const ReviewFormWrapper = styled.section`
  max-width: 600px;
  margin: 20px auto;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;

  form {
    max-width: 100%;

    .form-control {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
      margin: 10px 0;
    }

    textarea {
      border: 1px solid lightgray;
      width: 100%;
    }

    button[type="submit"] {
      width: 100%;
    }
  }
`;

const ProductWrapper = styled(Box)`
  margin-top: 60px;

  .rating {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 5px;

    a {
      display: flex;
      align-items: center;
      color: gray;
      gap: 2px;
    }
  }

  .product-card {
    max-width: 800px;
    margin: 40px auto;
    background: #f3f3f3;
  }

  .price {
    font-size: 24px;
    margin: 10px 0;
    color: var(--green-light);
    font-weight: bold;
  }

  .description {
    font-size: 14px;
    color: gray;
  }

  .card-text {
    background: white;
  }

  form {
    margin-top: 20px;
    max-width: 300px;

    .form-control {
      display: flex;
      align-items: flex-end;
      gap: 5px;
    }

    label {
      font-size: 14px;
    }

    .input-group {
      max-width: 100px;
      font-size: 14px;
      color: gray;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      flex: 1;
      padding: 10px;
      border-radius: 999px;
      background: var(--green-medium);
      color: white;
    }
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;

    .wishlist-btn {
      font-size: 14px;
      display: flex;
      gap: 2px;
      align-items: center;
    }

    .share-links {
      margin: 20px 0 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;

      a {
        max-width: 90px;
        padding: 2px 5px;
        display: block;
        color: white;
        border-radius: 2px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        font-size: 12px;

        &.facebook {
          background: #415896;
        }
        &.tweet {
          background: #4ba7e9;
        }
        &.google {
          background: #cf553e;
        }
        &.pinterest {
          background: #bd342c;
        }
      }
    }

    .card-guide {
      color: var(--green-medium);
      font-size: 18px;
      margin-top: 20px;
      text-decoration: underline;
    }
  }

  .product-info {
    max-width: 400px;
    margin: 40px auto;
  }

  .review {
    text-align: center;
  }

  .review {
    ul li {
      margin: 10px 0;
    }

    ul li p {
      color: gray;
    }

    ul li h4 {
      font-weight: bolder;
    }

    .write-review-btn {
      padding: 10px 16px;
      background: #333333;
      color: white;
      margin-top: 10px;
      display: inline-block;
    }
  }

  .details p {
    color: gray;
    font-size: 18px;
    text-align: justify;
  }

  .info-heading {
    font-size: 22px;
    display: flex;
    color: gray;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 30px 0 20px;
    cursor: pointer;
  }

  .info-heading h3.active {
    color: var(--green-medium);
    text-decoration: underline;
  }
`;


