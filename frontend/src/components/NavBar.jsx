import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {getFormattedDate} from "../utils/functions"
import {FaUserCircle} from "react-icons/fa"
function NavBar() {
  
  let date = getFormattedDate(new Date());

  return (
    <NavigationBar>
      <LinkStyled to={`/dashboard`}> Dashboard </LinkStyled>
      <LinkStyled to={`/diary?date=${date}`}> Diary </LinkStyled>
      <LinkStyled to={`/recipes`}> Recipes </LinkStyled>
     <LinkStyled to={`/user`}> <FaUserCircle/>  </LinkStyled> 
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;

  gap: 5rem;
  background: var(--secondary);
`;

const LinkStyled = styled(NavLink)`
  padding: 1rem;

  color: white;
`;

export default NavBar;
