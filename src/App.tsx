import Home from "./pages";
import GlobalStyle from "./styles/globalStyles";
import React from "react";

function App(): JSX.Element {
  return (
      <div>
          <GlobalStyle />
          <Home />
      </div>
  );
}

export default App;
