import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Orders() {
  const orders = [
    {
      order: "#5364",
      date: "Mar 27, 2019",
      status: "On Hold",
      total: "$162.00 for 2 items",
      link: "",
    },
    {
      order: "#3464",
      date: "Apr 30, 2019",
      status: "On Hold",
      total: "$107.00 for 2 items",
      link: "",
    },
  ];
  return (
     <SectionWrapper>
       <h3 className="title">My Orders</h3>
       <table>
         <thead>
           <tr>
             <th>ORDER</th>
             <th>DATE</th>
             <th>STATUS</th>
             <th>TOTAL</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           {orders.map((p) => {
             return (
               <tr key={p.order}>
                 <td>{p.order}</td>
                 <td>{p.date}</td>
                 <td>{p.status}</td>
                 <td>{p.total}</td>
                 <td>
                   <Link to={p.link}>View</Link>
                 </td>
               </tr>
             );
           })}
         </tbody>
       </table>
     </SectionWrapper>
   );
 }
 
 // Styled component for the section wrapper
 const SectionWrapper = styled.section`
   border: 1px solid lightgray;
   padding: 20px;
   overflow: auto;
 
   .title {
     font-size: 22px;
     color: #333;
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
       background: #333;
       padding: 10px;
     }
   }
 `;
 