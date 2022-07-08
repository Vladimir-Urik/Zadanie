import GlobalStyle from "./styles/globalStyles";
import React from "react";
import {Home} from "./pages";

function App(): JSX.Element {
  return (
      <div>
          <GlobalStyle />
          <Home />
      </div>
  );
}

export default App;
