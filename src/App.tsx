import React from 'react';
import './index.css';
import Layout from 'Layout';
import Dashborad from 'pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Layout title='Cricket'>
        <Dashborad />
      </Layout>
    </div>
  );
}

export default App;
