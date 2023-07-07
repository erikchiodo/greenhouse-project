import styled from "@emotion/styled";

export default function SectionTitle({ title }) {
     return <H2>{title}</H2>;
   }
// Styles for the H2 element using styled components
   const H2 = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: bolder;
  text-transform: uppercase;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 6px;
    background: var(--dark-bg);
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

   