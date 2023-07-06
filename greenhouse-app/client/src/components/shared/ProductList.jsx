import styled from "@emotion/styled";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

// components
import ProductCard from "./ProductCard";

export default function ProductsList({ productsCount, products }) {
     const [currentIdx, setCurrentIdx] = useState(0);
   
     return (
       <div>
         {/* Filter section */}
         <FilterWrapper>
           <Select placeholder="Sort By" maxW="200px">
             <option value="option1">Option 1</option>
             <option value="option2">Option 2</option>
             <option value="option3">Option 3</option>
           </Select>
         </FilterWrapper>
         {/* Product list */}
      <ProductsUL>
        {products
          .slice(
            currentIdx,
            productsCount + currentIdx >= products.length
              ? products.length
              : currentIdx + productsCount
          )
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ProductsUL>
       {/* Pagination */}
       <PaginationWrapper>
        {new Array(Math.ceil(products.length / productsCount))
          .fill(0)
          .map((_, i) => {
            return (
              <li key={i} onClick={() => setCurrentIdx(productsCount * i)}>
                {i + 1}
              </li>
            );
          })}
      </PaginationWrapper>
    </div>
  );
}

// Styled components

//filter section
const FilterWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//product list
const ProductsUL = styled.ul`
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;


//pagination section
const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & li {
    padding: 5px 10px;
    background: lightgray;
    border-radius: 5px;
    cursor: pointer;
  }
`;