import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, User} from './pages';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<User />}/>
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);

reportWebVitals();
