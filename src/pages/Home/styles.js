import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;

  ul {
    width: 90%;
  }

  li {
    width: 250px;
    height: 315px;
    display: flex;
    flex-direction: column;
    border: 2px solid;
    border-radius: 12px;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
