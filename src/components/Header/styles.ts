import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #title {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    margin: 0;
  }

  #themeIcon {
    cursor: pointer;
  }

  margin-bottom: 50px;
`;

export default Header;
