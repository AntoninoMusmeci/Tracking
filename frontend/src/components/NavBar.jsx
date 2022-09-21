import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function NavBar() {
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
  }
  let date = getFormattedDate(new Date());

  console.log(date);
  return (
    <NavigationBar>
      <LinkStyled to={`/dashboard`}> Dashboard </LinkStyled>
      <LinkStyled to={`/diary?date=${date}`}> Diary </LinkStyled>

      <LinkStyled to={`/recipes`}> Recipes </LinkStyled>
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  background: var(--secondary);
`;

const LinkStyled = styled(NavLink)`
  padding: 1rem;
  border: solid black 1px;
  color: white;
`;

export default NavBar;
