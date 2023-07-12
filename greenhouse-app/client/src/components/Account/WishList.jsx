
import styled from "@emotion/styled"; 
import { useState } from "react"; 


// icons
import { AiOutlineClose } from "react-icons/ai";

// assets
import ProductImage1 from "../../assets/products/product1.jpg"; 
import ProductImage2 from "../../assets/products/product2.jpg"; 
import ProductImage3 from "../../assets/products/product3.jpg";

export default function WishList() {
  const [wishList, setWishList] = useState([
    {
      image: ProductImage1,
      id: 1,
      product: "American Marigold",
      price: "23.45",
      stockStatus: "In Stock",
    },
    {
      id: 2,
      image: ProductImage2,
      product: "American Marigold",
      price: "23.45",
      stockStatus: "In Stock",
    },
    {
      id: 3,
      image: ProductImage3,
      product: "American Marigold",
      price: "23.45",
      stockStatus: "In Stock",
    },
  ]);

  const handleDelete = (id) => {
    setWishList(wishList.filter((e) => e.id !== id));
  };

  return (
    <SectionWrapper>
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((item) => {
            return (
              <tr key={item.id}>
                <td onClick={() => handleDelete(item.id)}>
                  <AiOutlineClose /> {/* AiOutlineClose icon */}
                </td>
                <td>
                  <img src={item.image} alt={item.product} /> {/* Product image */}
                </td>
                <td>{item.product}</td>
                <td>${item.price}</td>
                <td>{item.stockStatus}</td>
                <td>
                  <button>ADD TO CART</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  overflow: auto;
  width: 100%;

  table {
    width: 100%;
    border: 1px solid lightgray;
    border-collapse: collapse;
    min-width: 300px;

    tr,
    td,
    th {
      border: 1px solid lightgray;
      padding: 20px 10px;
      border-collapse: collapse;
      font-size: 15px;
      text-align: center;
    }

    td svg {
      margin: 0 auto;
      cursor: pointer;

      &:hover {
        color: var(--green-medium);
      }
    }

    th {
      font-weight: bolder;
    }

    td button {
      background: #333;
      color: white;
      padding: 10px;
    }

    td img {
      max-width: 150px;
    }
  }
`;
