import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--chinese-violet);
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 200px;
  margin-left: 2px;
  margin-bottom: 55px;
  padding-top: 0px;
  border: 2px solid white;
  border-radius: 5px;
  bottom: 0;
  right: 5px;
  position: fixed;
  @media (max-width: 700px) {
    margin-bottom: 85px;
    // padding-left: 25px;
    // padding-right: 25px;
    // color: transparent;
    // overflow: hidden;
  }
`;
