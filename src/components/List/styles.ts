import styled from "styled-components";

const List = styled.div`
  width: 100%;

  & > :first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  & > :last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export default List;
