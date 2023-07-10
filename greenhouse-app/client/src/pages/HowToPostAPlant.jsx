import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// assets
import HeroImage from "../assets/postaplant.jpeg";

export default function HowToPostAPlant() {
  return (
    <MainWrapper>
      <img src={HeroImage} alt="" />
      <h2 className="title">How To Post A Plant</h2>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          nihil eaque earum optio aperiam atque dolore cupiditate ipsa
          exercitationem repudiandae quibusdam! Laborum tempora nostrum
          voluptatum quaerat numquam quos laudantium iusto!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nobis
          ut optio alias mollitia voluptatibus laborum excepturi dignissimos,
          veniam delectus ex aliquid quam tempora cumque hic magni minus
          doloremque assumenda quis? Cum odit fugit porro nemo placeat, officiis
          eligendi optio.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          sint.
        </p>
        <Link to="/account" className="cta">
          Post A Plant Now!
        </Link>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 40px auto;

  .title {
    text-align: center;
    font-weight: bold;
    margin: 30px 0;
    font-size: 32px;
  }

  .content {
    max-width: 900px;
    margin: 0 auto;

    p {
      margin: 10px 0;
    }
  }

  .cta {
    margin-top: 20px;
    padding: 10px;
    border-radius: 2px;
    background: var(--green-medium);
    color: white;
    display: inline-block;
  }
`;
