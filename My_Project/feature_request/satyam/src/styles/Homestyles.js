import styled from "styled-components";
import {Container} from "./globalStyles";
import Link from "next/link";

export const Homestyles = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;





// styled.div`
//   /* min-height: 100vh; */
//   /* padding: 0 0.5rem; */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
//   font-family: cursive;
//   font-size: 2rem;
//   color: white;
//   letter-spacing: 0.1rem;
//   text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.66);

  
// `;

export const Globalstyled = styled.div`
  background: black;
`;

export const ImageStyled = styled.div`
  src: url(${props => props.src});
  height: 50px;
  align-items: right;
  display: flex;

`
