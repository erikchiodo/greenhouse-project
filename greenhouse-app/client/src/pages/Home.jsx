
//Importing necessary dependencies and assets.

import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import productsData from "../data/products";

// components
import Category from "../components/Home/Category";
import SectionTitle from "../components/shared/SectionTitle";
import BlogPostCard from "../components/Home/BlogPostCard";
import ProductsList from "../components/shared/ProductsList";

// assets
import HeroBackground from "../assets/hero.jpeg";
import Category1Image from "../assets/category1.jpg";
import Category2Image from "../assets/category2.jpg";
import Category3Image from "../assets/category3.jpg";
import Category4Image from "../assets/category4.jpg";

import ProductImage1 from "../assets/products/product1.jpg";
import ProductImage2 from "../assets/products/product2.jpg";
import ProductImage3 from "../assets/products/product3.jpg";
import ProductImage4 from "../assets/products/product4.jpg";
import ProductImage5 from "../assets/products/product5.jpg";
import ProductImage6 from "../assets/products/product6.jpg";
import ProductImage7 from "../assets/products/product7.jpg";
import ProductImage8 from "../assets/products/product8.jpg";
import ProductImage9 from "../assets/products/product9.jpg";

import BlogPostImage1 from "../assets/blog1.jpeg";
import BlogPostImage2 from "../assets/blog2.jpeg";
import BlogPostImage3 from "../assets/blog3.jpeg";

import PostPlantImage from "../assets/postaplant.jpeg";


export default function Home() {
  const handleSubscribeNow = (event) => {
    event.preventDefault();
    toast.success("Great choice! You're all set to save 20% on you next order");
  };
     //Defining the categories of products, including their titles, links, subtitles, and images.
     const categories = [
       {
         id: 1,
         title: "Category 1",
         link: "/",
         subtitle: "Big Sale Products",
         image: Category1Image,
       },
       {
         id: 2,
         title: "Category 2",
         link: "/",
         subtitle: "New Arrivals",
         image: Category2Image,
       },
       {
         id: 3,
         title: "Category 3",
         link: "/",
         subtitle: "Top Products",
         image: Category3Image,
       },
       {
         id: 4,
         title: "Category 4",
         link: "/",
         subtitle: "Trending Products",
         image: Category4Image,
       },
     ];
   //Defining the products available, including their IDs, images, titles, prices, ratings, and links.
    //  const products = [
    //    {
    //      id: 1,
    //      image: ProductImage1,
    //      title: "America Marigold",
    //      price: "23.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 2,
    //      image: ProductImage2,
    //      title: "Black Eyed Susan",
    //      price: "25.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 3,
    //      image: ProductImage3,
    //      title: "Common Yarrow",
    //      price: "65.00",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 4,
    //      image: ProductImage4,
    //      title: "Doublefile Viburnum",
    //      price: "67.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 5,
    //      image: ProductImage5,
    //      title: "Doublefile Viburnum",
    //      price: "67.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 6,
    //      image: ProductImage6,
    //      title: "America Marigold",
    //      price: "23.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 7,
    //      image: ProductImage7,
    //      title: "Common Yarrow",
    //      price: "65.00",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 8,
    //      image: ProductImage8,
    //      title: "America Marigold",
    //      price: "23.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //    {
    //      id: 9,
    //      image: ProductImage9,
    //      title: "America Marigold",
    //      price: "23.45",
    //      rating: 5,
    //      link: "/",
    //    },
    //  ];
     //Defining the blog posts, including their IDs, titles, short descriptions, dates, links, and images.
   
     const blogPosts = [
          {
               id: 1,
               title: "Artist Collaboration With The House 1",
               date: "Feb 28, 2019",
               shortDescription:
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
               link: "/blog",
               image: BlogPostImage1,
             },
             {
               id: 2,
               title: "Artist Collaboration With The House 2",
               date: "Feb 28, 2019",
               shortDescription:
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
               link: "/blog",
               image: BlogPostImage2,
             },
             {
               id: 3,
               title: "Artist Collaboration With The House 3",
               date: "Feb 28, 2019",
               shortDescription:
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
               link: "/blog",
               image: BlogPostImage3,
             },
           ];
           //Rendering the main content of the home page
           return (
               <main>
                 {/* Hero Section */}
                 <HeroWrapper as="section" padding="20px">
                   <Box maxW="500px">
                     <SubTitle>WELCOME TO GREENHOUSE</SubTitle>
                     <HeroTitle>Your Online Plant Paradise</HeroTitle>
                     <CTAButton>Shop Now &gt;</CTAButton>
                   </Box>
                 </HeroWrapper>
           
                 {/* Category Section */}
                 <CategoryWrapper as="section">
                   {categories.map(({ id, title, link, subtitle, image }) => {
                     return (
                       <Category
                         key={id}
                         title={title}
                         link={link}
                         subtitle={subtitle}
                         image={image}
                       />
                     );
                   })}
                 </CategoryWrapper>
           
                 {/* Products Section */}
                 <ProductsWrapper as="section">
                   <SectionTitle title="Our Products" />
                   <ProductsList productsCount={6} products={products} />
                 </ProductsWrapper>
           
                 {/* Blog Post Section */}
                 <BlogPostWrapper as="section">
                   <SectionTitle title="From Our Blog" />
                   <p className="subtitle">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                     dolores fugiat officiis distinctio impedit harum.
                   </p>
                   <BlogPostCards>
                     {blogPosts.map(
                       ({ id, title, shortDescription, date, link, image }) => {
                         return (
                           <BlogPostCard
                             key={id}
                             title={title}
                             shortDescription={shortDescription}
                             date={date}
                             link={link}
                             image={image}
                           />
                         );
                       }
                     )}
                   </BlogPostCards>
                 </BlogPostWrapper>
           
                 {/* Sell Plants Section */}
                 <div
                   style={{ background: "linear-gradient(to right, #E2DEDB, #EFEEEA)" }}
                 >
                   <SellPlantWrapper imagepath={PostPlantImage}>
                     <Box as="div">
                       <h3>Post a Plant</h3>
                       <p>Find you plant the home it deserves</p>
                       <Link to="/how-to-post-a-pant">Learn How &gt;</Link>
                     </Box>
                   </SellPlantWrapper>
                 </div>
           
                 {/* Subscribe Section */}
                 <SubscribeWrapper>
                   <p className="small">Special from greenhouse</p>
                   <h3>
                     Get <span className="strong">20% Off</span> Your Next Order
                   </h3>
                   <p className="small">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                     minus.
                   </p>
                   <form>
                     <input type="email" placeholder="Enter Your Email..." />
                     <button type="submit" onClick={handleSubscribeNow}>
                        Subscribe Now &gt;
                        </button>
                   </form>
                 </SubscribeWrapper>
               </main>
             );
           }

// styled components
//subtitles
const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #333333;

  &::after {
    content: "";
    display: block;
    width: 10%;
    height: 10px;
    margin-top: 5px;
    background: var(--green-medium);
  }
`;
//hero titles
const HeroTitle = styled.h1`
  font-size: clamp(56px, 5vw, 32px);
  line-height: 110%;
  margin: 20px 0 30px;
`;

//buttons
const CTAButton = styled.button`
  background: var(--green-medium);
  color: white;
  padding: 12px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
`;

//wrappers
//hero wrapper
const HeroWrapper = styled(Box)`
  background: url(${HeroBackground});
  background-position: bottom;
  background-size: cover;
  min-height: 450px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
//product wrapper
const ProductsWrapper = styled(Box)`
  max-width: 1000px;
  margin: 60px auto 0;
`;

//category wrapper
const CategoryWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 60px auto 0;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
`;

//blog wrapper
const BlogPostWrapper = styled(Box)`
  margin: 60px 0 0;
  padding: 0 5px;

  & > .subtitle {
    text-align: center;
    max-width: 600px;
    margin: 20px auto;
    font-weight: 600;
    color: gray;
    font-size: 14px;
  }
`;
//blog post wrapper
const BlogPostCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

//subscribe wrapper
const SubscribeWrapper = styled(Box)`
  text-align: center;
  margin-top: 60px;
  padding: 40px 5px;

  & .small {
    color: gray;
    font-size: 14px;
    font-weight: 600;
  }

  & h3 {
    font-size: clamp(32px, 5vw, 42px);
    margin: 10px 0;
    & .strong {
      color: var(--green-medium);
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 20px;

    & input {
      font-size: 14px;
      font-weight: bolder;
      border-bottom: 1px solid lightgray;
      text-align: center;
      max-width: 400px;
      padding-bottom: 10px;
      width: 100%;
      margin: 0 auto;
      outline: none;
    }

    & button {
      padding: 18px;
      background: var(--green-medium);
      color: white;
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
`;

//post a plant wrapper
const SellPlantWrapper = styled(Box)`
  margin: 60px auto 0;
  background: url(${(props) => props.imagepath});
  background-size: cover;
  background-position: left;
  display: flex;
  justify-content: flex-end;
  max-width: 1000px;
  align-items: center;
  min-height: 500px;
  padding: 50px 5px;

  & h3 {
    font-weight: bold;
    font-size: clamp(38px, 5vw, 48px);
    &::after {
      content: "";
      display: block;
      width: 20%;
      background: var(--green-medium);
      height: 10px;
    }
  }
  & p {
    margin: 20px 0 0px;
  }

  & a {
    padding: 12px;
    background: var(--green-medium);
    color: white;
    font-weight: bolder;
    font-size: 18px;
    display: inline-block;
    border-radius: 5px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    background-position: -250px;
  }
`;

           
           