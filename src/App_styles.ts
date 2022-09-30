import styled from "styled-components";

import bg_desktop_dark from "./images/background/bg-desktop-dark.jpg";
import bg_desktop_light from "./images/background/bg-desktop-light.jpg";

import bg_mobile_dark from "./images/background/bg-mobile-dark.jpg";
import bg_mobile_light from "./images/background/bg-mobile-light.jpg";

interface Props {
  isDarkMode: boolean;
}

const App = styled.div<Props>`
  height: 100%;

  background-color: var(--bg_light);
  background-image: url(${(props) => props.isDarkMode ? bg_desktop_dark : bg_desktop_light});
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 375px) {
    background-color: var(--bg_dark);
    background-image: url(${(props) => props.isDarkMode ? bg_mobile_dark : bg_mobile_light});
  }
`;

const AppChildren = styled.div`
  width: 50%;

  margin: 0 auto;
  padding-top: 30px;

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export { AppChildren };
export default App;
