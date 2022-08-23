import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "Layout";
import Dashborad from "pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout title="Cricket">
          <Routes>
            <Route path="/" element={<Dashborad />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
