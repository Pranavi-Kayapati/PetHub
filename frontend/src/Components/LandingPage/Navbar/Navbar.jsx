import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
// import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  useToast,
  AvatarGroup,
  Avatar,
  Button,
  Toast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaHeartCirclePlus, FaUserAlt } from "react-icons/fa";
import logo from "../image/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  // const toast = useToast();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const email = localStorage.getItem("user");
    setToken(localToken);
    setUser(email);
  }, [token, user]);

  // Handle logout function
  let handleLogout = () => {
    Toast({
      title: "Logged Out",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
    localStorage.clear();
    setToken("");
    setUser("");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
        position: "sticky",
        zIndex: "5",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "60px",
          width: "35%",
          justifyContent: "space-around",
          color: "#3232af",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img width="180px" src={logo} alt="" />
        </Link>
        <h3 style={{ margin: "0 10px" }}>ALL ABOUT PETS</h3>
        <h3
          onClick={toggleNav}
          style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bolder" }}
        >
          {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}
        </h3>
        <h3 style={{ margin: "0 10px" }}>
          <Link to="/services">OUR SERVICES</Link>
        </h3>
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <h3 style={{ margin: "0 10px" }}>ALL ABOUT PETS</h3>
          <h3
            onClick={toggleNav}
            style={{
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}
          </h3>
        </div> */}
      </div>

      <div style={{ display: "flex", alignItems: "center", width: "25%" }}>
        <h3>
          <AiFillHeart style={{ fontSize: "28px" }} />
        </h3>

        <div
          style={{
            borderLeft: "1px solid gray",
            height: "50px",
            margin: "0 8px",
          }}
        ></div>
        {!token ? (
          <>
            <Link to="/signup">
              <h3>Signup</h3>
            </Link>
            <Link to="/login">
              <h3 style={{ marginLeft: "15px" }}>Login</h3>
            </Link>
          </>
        ) : (
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <AvatarGroup spacing="1rem">
                <Avatar size="xs" bg="teal.500" />
              </AvatarGroup>
            </MenuButton>
            <MenuList>
              <MenuItem>{user}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
      </div>

      {isNavOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100%",
            backgroundColor: "#3232af",
            color: "#fff",
            transition: "height 0.5s",
            border: "1px solid red",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              justifyContent: "space-evenly",
              height: "60px",
              alignItems: "center",
            }}
          >
            <li>
              <Menu>
                <MenuButton as={Text} isLazy={true} color="#fff">
                  ADOPT OR GET INVOLVED
                </MenuButton>
                <MenuList color="#fff" bgColor="#3232af">
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">About petfinder</MenuItem>
                  </Link>
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Adopting Pets</MenuItem>
                  </Link>
                  <MenuItem bgColor="#3232af">
                    Animals Shelter & Rescues
                  </MenuItem>
                  <MenuItem bgColor="#3232af">Petfinder Foundation</MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton as={Text} isLazy={true} color="#fff">
                  DOGS & PUPPIES
                </MenuButton>
                <MenuList color="#fff" bgColor="#3232af">
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Dog Adoption</MenuItem>
                  </Link>
                  <MenuItem bgColor="#3232af">Dog Breeds</MenuItem>
                  <Link to="/pets">
                    <MenuItem bgColor="#3232af">Feeding your Dog</MenuItem>
                  </Link>
                  {/* Add more dog-related menu items */}
                </MenuList>
              </Menu>
            </li>
          </ul>
        </div>
      )}
      {/* <div className="hamburger-icon" onClick={toggleNav}>
        <GiHamburgerMenu />
      </div> */}
    </div>
  );
};

export default Navbar;
