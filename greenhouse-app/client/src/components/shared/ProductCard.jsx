import { Box, Stack, Tooltip } from "@chakra-ui/react";
import styled from "@emotion/styled";

// icons
import {
     PiShoppingCartSimpleLight,
     PiEyeLight,
     PiHeartLight,
   } from "react-icons/pi";

   export default function ProductCard({ product }) {
     return (
       <ProductLI>
         {/* Image section */}
         <Stack className="image-section">
           <img src={product.image} alt=""  />
           <Box className="button-group">
             {/* Add to wishlist button */}
             <Tooltip label="Add to wishlist">
               <button>
                 <PiHeartLight fontSize={22} />
               </button>
             </Tooltip>
             {/* QuickView button */}
          <Tooltip label="QuickView">
            <button>
              <PiEyeLight fontSize={22} />
            </button>
          </Tooltip>
              {/* Add to cart button */}
              <Tooltip label="Add to cart">
            <button>
              <PiShoppingCartSimpleLight fontSize={22} />
            </button>
          </Tooltip>
        </Box>
      </Stack>
      {/* Text section */}
      <Stack className="text-section">
        {/* Product title */}
        <h3 className="title">{product.title}</h3>
        {/* Product price */}
        <h2 className="price">${product.price}</h2>
        {/* Product rating */}
        <p>{"⭐".repeat(product.rating)}</p>
      </Stack>
    </ProductLI>
  );
}
// Styled components
const ProductLI = styled.li`
  max-width: 300px;
  width: 100%;

  .image-section {
    position: relative;
  }

  .image-section img {
    max-width: 100%;
    height: 300px;
    border-radius: 5px;
  }

  .button-group {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 4px;
    left: 4px;
  }

  .button-group button {
    padding: 5px;
    background: white;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    &:hover {
      background: var(--green-very-light);
      color: white;
    }
  }

  .text-section {
    margin-top: 10px;

    & .title {
      font-weight: bolder;
      font-size: 18px;
    }

    & .price {
      font-size: 18px;
      color: var(--green-medium);
      font-weight: bolder;
      line-height: 10px;
    }
  }
`;