import styled from "styled-components";

export const SHeader = styled.header`
  h1 {
    font-size: 35px;
    color: #01232F;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 40px;
    font-weight: 500;
    padding: 0;
    font-family: eczar;
  }

  nav {
    display: flex;
    background-color: #01232F;
    height: 70px;
    color: white;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      max-height: 40px;
      padding-right: 60px;
      overflow: hidden;
      flex-shrink: 0;

      a {
        margin: 20px;
      }

      input {
        background-color: rgba(217, 217, 217, 0.25);
        background-image: url("../img/LoupeIcon.png");
        background-repeat: no-repeat;
        background-position: 5% 50%;
        color: #ffff;
        padding: 10px;
        padding-left: 10%;
        border: none;
        border-radius: 20px;
        min-width: 250px;
      }

      img {
        height: 50px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
`;
