import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Loading from './LoadingPage';

const DefaultLayout = ( props ) => (
  <div id="groot">
    <Loading />
    <Header />
    <div id="content">
      { props.children }
    </div>
    <Footer />
  </div>
);

export default DefaultLayout;
