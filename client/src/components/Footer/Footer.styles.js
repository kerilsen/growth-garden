import styled from "styled-components";

export const SocialFooter = styled.footer`
  position: fixed;
  // height: 7vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--cambridge-blue);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  z-index: 100;
`;

export const SocialIcons = styled.div`
  a {
    color: black;
    margin: 0 10px;
    font-size: 18px;
  }
  & a:hover {
    color: lightgray;
  }
`;

export const Copyright = styled.p`
  font-size: 18px;
  // margin: 10px;
  & a {
    // margin: 0 10px;
    color: black;
  }
  & a:hover {
    color: lightgray;
  }
`;
