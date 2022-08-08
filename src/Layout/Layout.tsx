import VSCarousel from "components/VSCarousel";
import React, { useState } from "react";
import ReactHelmet from "react-helmet";
import { Scrollbars } from "react-custom-scrollbars-2";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebabr";
import Root from "./Root";
import SideWrapper from "./SideWrapper";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  const height = window.innerHeight;

  return (
    <Root>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <SideWrapper>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin="100%"
          autoHeightMax={height}
          universal
        >
          <div className="w-full">
            <Header />
            {children}
            <Footer />
          </div>
        </Scrollbars>
      </SideWrapper>
    </Root>
  );
};

export default Layout;
