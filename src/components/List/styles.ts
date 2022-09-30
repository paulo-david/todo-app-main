import styled from "styled-components";

const List = styled.div`
  width: 100%;

  & > :first-child {
    border-radius: 5px 5px 0 0;
  }
`;

interface Props {
  filter?: string;
  isDarkMode?: boolean;
}

export const ListFooter = styled.div<Props>`
  background-color: var(--bg_lst_light);
  border-radius: 5px !important;

  &,
  button {
    font-family: "Josefin Sans";
    color: var(--light_gray);
    font-size: 18px;

    border: none;
  }

  button {
    cursor: pointer;
    background-color: inherit;
  }
  button:hover {
    color: var(--dark_gray);
  }

  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Filter = styled.section<Props>`
  display: flex;

  #all {
    ${(props) => (props.filter === "all" ? "color: var(--blue);" : "")}
  }
  #active {
    ${(props) => (props.filter === "false" ? "color: var(--blue);" : "")}
  }
  #completed {
    ${(props) => (props.filter === "true" ? "color: var(--blue);" : "")}
  }
`;

export default List;
