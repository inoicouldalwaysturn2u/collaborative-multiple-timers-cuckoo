import React from 'react';

const Header = ( props ) => (
  <header className="header">
    <div className="content-container">    
      <div className="header__content">
        <h2 className="header__title vertical-middle">
          Cuckoo Grouped Timers for Collaboration
        </h2>

        <a className="header__title" href="/">
          <button
            variant="success"
            id="top-home-button" 
            className="casual-button header__button-home" 
          >
            <span className="header__button-text"><i className="icon-pad-right fas fa-hand-point-left"></i> Home</span>
          </button>
        </a>
      </div>
      <div className="header__secondary"></div>
    </div>
  </header>
);

export default Header;
