import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./index.css";
import Layout from "Layout";
import Main from "pages/Main";
import Homepage from "pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          element={
            <Layout title="cricket">
              <Main />
            </Layout>
          }
        >
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
