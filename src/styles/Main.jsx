import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4.5rem);
  grid-template-rows: minmax(200px, auto) repeat(5, 4.5rem);
  grid-gap: 1rem;
  padding: 30px 25px;
  text-align: center;
  justify-content: center;
  align-content: center;
  background: #1a1b28;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  font-family: "Berkshire Swash", cursive;
  color: white;
  padding: 20px 10px 20px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: right;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Current = styled.div`
  font-size: 2.8rem;
  /* font-weight: bold; */
  padding: 20px 0;
  ${({ carr }) =>
    carr && "position: relative; border-bottom: 1px solid #52cadc28;"}

  &::before {
    position: absolute;
    content: "=";
    right: 100%;
    font-size: 2.8rem;
    color: #52c9dc;
  }
`;

export const Previous = styled.div`
  font-size: 1.6rem;
  /* font-weight: bold; */
  span {
    color: #52c9dc;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: "Berkshire Swash", cursive;
  border-radius: 6px;
  font-size: 1.8rem;
  color: white;
  border: none;
  background-color: #1e2435;
  &:hover {
    background-color: #242730;
  }

  ${({ spanTwo }) =>
    spanTwo &&
    `grid-column:span ${spanTwo};
  `}

  ${({ spanTwoRow }) =>
    spanTwoRow &&
    `grid-row:span ${spanTwoRow};
  `}
    ${({ operation }) =>
    operation &&
    `background-color: #52C9DC ;
  };
  `}
`;
