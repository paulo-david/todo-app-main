import HeaderWrapper from "./styles";
import sunIcon from "../../images/icons/icon-sun.svg";
import moonIcon from "../../images/icons/icon-moon.svg";

import store from "../../store/store";
import { toogle_theme } from "../../store/theme/themeSlice";
import { useAppSelector as useSelector } from "../../store/hooks";

const Header = () => {
  const isDarkMode = useSelector((state) => state.themes.isDarkMode);

  const toggle_theme_manual = () => {
    store.dispatch(toogle_theme({}));
  };

  return (
    <HeaderWrapper>
      <h1 id="title">todo</h1>
      <div id="themeIcon" onClick={toggle_theme_manual}>
        {isDarkMode ? (
          <img src={sunIcon} alt="sunIcon" />
        ) : (
          <img src={moonIcon} alt="moonIcon" />
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
