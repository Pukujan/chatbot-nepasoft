import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Chatbot from "./components/Chatbot.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import theme from "./theme.jsx";
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
