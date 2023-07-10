import styled from "@emotion/styled";

// Component for rendering a blog post
export default function BlogPost({ post }) {
  return (
    <ArticleWrapper>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <div className="blog-details">
        <p className="author">
          Posted By <strong>${post.author} |</strong> {/* Author name */}
        </p>
        <p className="date">{post.date} |</p> {/* Post date */}
        <p className="tagsinfo">{post.tags}</p> {/* Tags */}
      </div>
      <div className="content">
        <p>{post.content}</p> {/* Post content */}
      </div>
      <div className="comment">
        <form>
          <h2>Leave a Reply</h2>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" name="email" />
          </div>
       
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </ArticleWrapper>
  );
}

// Styled component for the article wrapper
const ArticleWrapper = styled.article`
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  & img {
    max-width: 100%;
    border-radius: 10px;
  }

  & h2 {
    font-size: 22px;
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .blog-details {
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    text-transform: uppercase;
    font-weight: bolder;
    color: gray;
    font-size: 13px;
    margin: 5px 0;

    .author strong {
      color: black;
    }

    .tagsinfo {
      color: lightblue;
    }
  }

  .content {
    margin: 30px 0;
    color: gray;
    font-size: 16px;
    text-align: justify;
  }

  .comment {
    margin-top: 60px;

    form {
      h2 {
        font-weight: bold;
        font-size: 17px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 10px 0;

        input,
        textarea {
          outline: none;
          border: 1px solid lightgray;
          background: #eee;
          padding: 8px;
        }
      }

      button[type="submit"] {
        padding: 10px;
        margin-top: 10px;
        background: lightgray;
        max-width: 200px;
        width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 10px 5px;
  }
`;
