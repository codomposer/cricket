import React from "react";
import ReactHelmet from 'react-helmet'
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebabr";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex">
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
