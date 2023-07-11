import { useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";


// components
import WishList from "../components/Account/WishList";
import PersonalInfo from "../components/Account/PersonalInfo";
import PostAPlant from "../components/Account/PostAPlant";
import PlantPosts from "../components/Account/PlantPosts";
import Orders from "../components/Account/Orders";
import { useState } from "react";

export default function Account() {
  const data = {
    username: "Ellie",
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!data.username) {
      navigate("/login");
    }
  }, [navigate, data.username]);
  const [view, setView] = useState("yourWishList");

  return (
    <MainWrapper>
      {/* Display username */}
      <h2 className="username">Hello {data.username},</h2>
       {/* Tabs */}
      <div className="tabs">
        <ul className="tab-titles">
          <li
            className={view === "personalInfo" ? "active" : ""}
            onClick={() => setView("personalInfo")}
          >
            Personal Info
          </li>
           {/* WishList tab */}
          <li
            className={view === "yourWishList" ? "active" : ""}
            onClick={() => setView("yourWishList")}
          >
            Your WishList
          </li>
          {/* Orders tab */}
          <li
            className={view === "orders" ? "active" : ""}
            onClick={() => setView("orders")}
          >
            Orders
          </li>
          {/* Post a Plant tab */}
          <li
            className={view === "postAPlant" ? "active" : ""}
            onClick={() => setView("postAPlant")}
          >
            Post a Plant
          </li>
            {/* My Plant Posts tab */}
          <li
            className={view === "myPlantPost" ? "active" : ""}
            onClick={() => setView("myPlantPost")}
          >
            My Plant Posts
          </li>
        </ul>
         {/* Display component based on selected view */}
        {view === "yourWishList" && <WishList />}
        {view === "personalInfo" && <PersonalInfo />}
        {view === "myPlantPost" && <PlantPosts />}
        {view === "postAPlant" && <PostAPlant />}
        {view === "orders" && <Orders />}
      </div>
      {/* Log Out button */}
      <Link to="/logout" className="logout-btn">
        Log Out
      </Link>
    </MainWrapper>
  );
}

// Styled components
const MainWrapper = styled.main`
  max-width: 1100px;
  margin: 40px auto;
  padding: 5px;

  .username,
  .logout-btn {
    font-size: 22px;
    color: gray;
  }

  .tabs {
    display: flex;
    margin: 50px 0;
    gap: 40px;

    & > * {
      width: 100%;
    }
  }

  .tab-titles {
    max-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: gray;
    font-size: 18px;
    cursor: pointer;

    & .active {
      color: var(--green-medium);
    }
  }

  .logout-btn {
    margin: 30px 0;
  }

  @media (max-width: 968px) {
    .tabs {
      flex-direction: column;

      ul {
        border-bottom: 1px solid lightgray;
        margin: 0 auto;
        max-width: 100%;
        padding-bottom: 20px;
      }
    }
  }
`;
