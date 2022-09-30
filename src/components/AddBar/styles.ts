import styled from "styled-components";

const AddBar = styled.div`

  margin-bottom: 30px;

  > * {
    border-radius: 5px;
  }

  #input_description {
    font-size: 18px;
    font-family: "Josefin Sans";
    border: none;

    outline: none;
  }

  #empty {
    height: 18px;
    width: 18px;
  }
`;

export default AddBar;
