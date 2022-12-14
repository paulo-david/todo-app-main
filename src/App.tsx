import AppWrapper from "./App_styles";
import { AppChildren } from "./App_styles";
import AddBar from "./components/AddBar";
import Header from "./components/Header";
import List from "./components/List";

import { useAppSelector as useSelector } from "./store/hooks";

function App() {
  const isDarkMode = useSelector((state) => state.themes.isDarkMode);

  return (
    <AppWrapper className="App" isDarkMode={isDarkMode}>
      <AppChildren>
        <Header></Header>
        <AddBar></AddBar>
        <List></List>
      </AppChildren>
    </AppWrapper>
  );
}

export default App;
