import styled from "styled-components";

interface Props {
  isDarkMode: boolean;
}

const AddBar = styled.div<Props>`
  margin-bottom: 30px;
  caret-color: var(--blue);

  > * {
    border-radius: 5px;
  }

  #input_description {
    font-size: 18px;
    font-family: "Josefin Sans";
    border: none;

    outline: none;

    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    background-color: ${(props) =>
      props.isDarkMode ? "var(--bg_lst_dark)" : "var(--bg_lst_light)"};
  }

  #empty {
    height: 18px;
    width: 18px;
  }
`;

export default AddBar;
