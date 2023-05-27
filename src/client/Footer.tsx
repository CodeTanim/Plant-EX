import React from "react";
import styled from "styled-components";

const Section_foot = styled.div`
  background-color: #006400;
  color: #fff;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  text-align: center;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    margin-top: 15px;
    padding: 0;
  }

  li {
    margin: 0 1rem;
    font-size: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #15cdfc;
  }

  /* Media query for smaller screen sizes */
  @media (max-width: 768px) {
    li {
      font-size: 0.7rem;
    }
  }
`;

const Footer = () => {
  return (
    <Section_foot>
      <ul>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </Section_foot>
  );
};

export default Footer;
