import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import Logo from "../../assets/logo.png";


//icons
import {
     PiMagnifyingGlass,
     PiUser,
     PiHeart,
     PiShoppingCartSimpleLight,
     PiListFill,
   } from "react-icons/pi";
   import { useEffect, useState } from "react";

   export default function Header() {
     const [showMenu, setShowMenu] = useState(false);
     const { pathname } = useLocation();
   
     useEffect(() => {
       setShowMenu(false);
     }, [pathname]);
   
     const toggleMenu = () => {
       setShowMenu(!showMenu);
     };
   
     return (
          <HeaderWrapper>
            <Nav>
              {/* Logo section */}
              <NavBrand>
                <Link to="/">
                  <NavLogo src={Logo} alt="Greenhouse" />
                </Link>
              </NavBrand>
              {/* Links Section */}
              <NavUL showMenu={showMenu}>
                <NavLink>
                  <Link to="/">HOME</Link>
                </NavLink>
                <NavLink>
                  <Link to="/shop">SHOP</Link>
                </NavLink>
                <NavLink>
                  <Link to="/blog">BLOG</Link>
                </NavLink>
                <NavLI>
                  <SearchForm>
                    <NavInput type="text" name="search" placeholder="search..." />
                    <NavButton>
                      <PiMagnifyingGlass fontSize={22} />
                    </NavButton>
                  </SearchForm>
                </NavLI>
                <NavLI>
                  <Menu>
                    <MenuButton>
                      <PiUser fontSize={22} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to="/account">My Account</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/login">Login</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/register">Register</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </NavLI>
                <NavLI>
                  <Link to="/favorites">
                    <PiHeart fontSize={22} />
                  </Link>
                </NavLI>
                <NavLI>
                  <Link to="/cart">
                    <PiShoppingCartSimpleLight fontSize={22} />
                  </Link>
                </NavLI>
              </NavUL>
              {/* Nav Menu */}
              <MenuWrapper showMenu={showMenu}>
                <PiListFill fontSize={30} onClick={toggleMenu} />
              </MenuWrapper>
            </Nav>
          </HeaderWrapper>
        );
      }
      // styled components
      //  header section
const HeaderWrapper = styled.header`
box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.4);
z-index: 5;
position: sticky;
top: 0;
background: white;
`;

//  navigation section
const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

//  the brand/logo section of the navigation
const NavBrand = styled.div`
  max-width: 450px;
  width: 100%;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
//  the logo image
const NavLogo = styled.img`
  max-width: 250px;
  width: 100%;
  display: block;
`;

// unordered list of navigation links
const NavUL = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  transition: top 0.3s ease;

  @media (max-width: 1024px) {
    background: white;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: ${(props) => (props.showMenu ? "0px" : "-1000px")};
    right: 0px;
    padding: 70px 0 20px;
    gap: 20px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;
//  navigation link
const NavLink = styled.li`
  & > a {
    color: var(--dark-bg);
    font-weight: 600;
  }
`;

// Styles for each list item in the navigation

const NavLI = styled.li`
  & > a,
  & > button {
    color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & a:hover,
  & > button:hover {
    color: var(--green-medium);
  }
`;
//  the search field
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;

  @media (max-width: 1024px) {
    margin: 10px;
  }
`;

//search input field
const NavInput = styled.input`
  outline: none;
  border: 1px solid black;
  padding: 8px;
  border-radius: 5px;
`;

//search button
const NavButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;

//menu wrapper

const MenuWrapper = styled.div`
  display: none;
  z-index: 20;
  cursor: pointer;
  color: ${(props) => (props.showMenu ? "var(--green-medium)" : "black")};
  @media (max-width: 1024px) {
    display: block;
  }
`;