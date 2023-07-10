import styled from "@emotion/styled";

// Importing assets
import BlogHeroImage from "../assets/blog-hero.jpg";
import blogPostImage from "../assets/blogpostmain.jpeg";

// Importing components
import BlogPost from "../components/Blog/BlogPost";

export default function Blog() {
  const blogPost = {
    id: 1,
    title: "Artist Collaboration With The House 1",
    image: blogPostImage,
    author: "Themes PlazaThemes",
    date: "Feb 28th, 2019",
    tags: "Fashion",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
    debitis commodi expedita, asperiores soluta eos nemo aspernatur
    eveniet dolores voluptas, rem optio totam perferendis! Rerum mollitia
    impedit non accusamus ipsam adipisci! Veritatis, alias sequi eius
    voluptatum veniam dicta consequatur impedit animi unde commodi beatae
    quia doloribus, illo placeat qui. Dolor, doloremque? Dolorum,
    doloremque? Minima iure consectetur maxime consequatur sit eaque natus
    et! Alias sint corrupti ab vero eveniet. Possimus, ad. Numquam quaerat
    sunt architecto assumenda autem aliquid, rem accusamus similique
    veritatis voluptas natus blanditiis dolores! Iure, deserunt explicabo
    reprehenderit vitae sed earum minima ipsa odio. Laborum earum quam
    numquam quasi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
    debitis commodi expedita, asperiores soluta eos nemo aspernatur
    eveniet dolores voluptas, rem optio totam perferendis! Rerum mollitia
    impedit non accusamus ipsam adipisci! Veritatis, alias sequi eius
    voluptatum veniam dicta consequatur impedit animi unde commodi beatae
    quia doloribus, illo placeat qui. Dolor, doloremque? Dolorum,
    doloremque? Minima iure consectetur maxime consequatur sit eaque natus
    et! Alias sint corrupti ab vero eveniet. Possimus, ad. Numquam quaerat
    sunt architecto assumenda autem aliquid, rem accusamus similique
    veritatis voluptas natus blanditiis dolores! Iure, deserunt explicabo
    reprehenderit vitae sed earum minima ipsa odio. Laborum earum quam
    numquam quasi.
    `,
  };

  return (
    <main>
      <BlogHeroWrapper>
        <h1>Our Blog</h1>
      </BlogHeroWrapper>
      <PostWrapper>
        <div className="tags">
          <h3>Popular Tags</h3>
          <ul>
            <li>
              <button>Plants</button>
            </li>
            <li>
              <button>Pots</button>
            </li>
            <li>
              <button>Bonsai</button>
            </li>
            <li>
              <button>Big Sale</button>
            </li>
            <li>
              <button>Sell</button>
            </li>
            <li>
              <button>Moss</button>
            </li>
          </ul>
        </div>
        <BlogPost post={blogPost} />
      </PostWrapper>
    </main>
  );
}

// Styles for the hero section of the blog page
const BlogHeroWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  background: url(${BlogHeroImage});
  background-size: cover;
  min-height: 400px;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 60px;

  h1 {
    font-size: clamp(38px, 5vw, 64px);
  }

  @media (max-width: 768px) {
    padding-left: 30px;
  }
`;

// Styles for the wrapper section containing blog posts and tags
const PostWrapper = styled.section`
  max-width: 1200px;
  margin: 40px auto 0;
  display: flex;
  justify-content: center;
  gap: 20px;

  .tags {
    max-width: 600px;
    margin: 20px auto;

    h3 {
      font-weight: bold;
      font-size: 17px;
      text-align: center;
      text-transform: uppercase;

      ::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: var(--light-bg);
        margin-top: 20px;
      }
    }

    ul {
      display: flex;
      margin: 30px 0;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;

      li {
        padding: 7px 10px;
        text-align: center;
        border-radius: 2px;
        background: var(--light-bg);
        color: gray;
      }
    }
  }

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
