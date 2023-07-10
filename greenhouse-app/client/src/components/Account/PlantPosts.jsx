import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function PlantPosts() {
  // Array of plant posts
  const plantPosts = [
    {
      id: "#5364",
      date: "Mar 27, 2019",
      status: "Sold",
      price: "162.00",
      link: "",
    },
    {
      id: "#3464",
      date: "Apr 30, 2019",
      status: "Posted",
      price: "107.00",
      link: "",
    },
  ];

  return (
    <SectionWrapper>
      <h3 className="title">My Plant Posts</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render plant posts */}
          {plantPosts.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.date}</td>
                <td>{p.status}</td>
                <td>{p.price}</td>
                <td>
                  {/* View and delete links */}
                  <Link to={p.link}>View</Link>
                  <Link to={p.deleteLink}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </SectionWrapper>
  );
}

// Styled components
const SectionWrapper = styled.section`
  border: 1px solid lightgray;
  padding: 20px;
  overflow: auto;

  .title {
    font-size: 22px;
    color: var(--green-medium);
  }

  table {
    margin-top: 20px;
    border: 1px solid lightgray;
    width: 100%;
    min-width: 300px;

    th,
    tr,
    td {
      border: 1px solid lightgray;
      text-align: center;
    }

    th,
    td {
      padding: 10px;
    }

    & a {
      color: white;
      background: var(--green-medium);
      padding: 10px;
      margin: 0 5px;
    }
  }
};
`