import styled from "styled-components";

export const SMain = styled.main`
  padding: 20px 60px;
  background-color: #f9f9f9;

  .categoria {
    margin-bottom: 40px;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #01232f;
    }
  }

  .carrossel {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  section {
    margin-bottom: 40px;
  }

  header {
    margin-bottom: 10px;

    h3 {
      font-size: 18px;
      color: #01232f;
      margin-bottom: 4px;
    }

    h5 {
      font-size: 14px;
      color: #444;
    }
  }

  img {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #0066cc;

    &:hover {
      text-decoration: underline;
    }
  }
`;
