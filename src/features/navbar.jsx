import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <Menu>
    <Link to="/">Home</Link>
    <Link to="/add-card">Add New Card</Link>
  </Menu>
);

export const Menu = styled.div`
  display: flex;
  background-color: #f5f5f5;
  padding: 30px;
  a {
    padding: 0 30px;
  }
`;
