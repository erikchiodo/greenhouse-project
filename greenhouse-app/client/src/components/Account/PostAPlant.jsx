import styled from "@emotion/styled";

export default function PostAPlant() {
  return (
    <SectionWrapper>
      <form>
        {/* Plant Name */}
        <div className="form-group">
          <label>Plant Name</label>
          <input type="text" />
        </div>
        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <input type="text" />
        </div>
        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input type="text" />
        </div>
        {/* Image */}
        <div className="form-group">
          <label>Image</label>
          <input type="file" />
        </div>
        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea id="" cols="30" rows="3"></textarea>
        </div>
        {/* Product Details */}
        <div className="form-group">
          <label>Product Details</label>
          <textarea id="" cols="30" rows="3"></textarea>
        </div>
        {/* Submit Button */}
        <button type="submit">Post</button>
      </form>
    </SectionWrapper>
  );
}

// Styled component
const SectionWrapper = styled.section`
  form {
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .form-group {
      display: flex;

      label {
        max-width: 100px;
        width: 100%;
        color: gray;
      }

      input,
      textarea {
        padding: 7px;
        width: 100%;
        background: var(--light-bg);
        border: 1px solid lightgray;
      }
    }

    button[type="submit"] {
      padding: 12px;
      background: var(--green-medium);
      color: white;
      align-self: flex-end;
      margin-top: 20px;
      border-radius: 2px;
      max-width: 150px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .form-group {
      flex-direction: column;
    }
  }
`;
