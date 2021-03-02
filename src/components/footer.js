import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>&copy; 2020 <Link to="https://cuojue.org/" text="CuoJue.org" /></p>
      </div>
    </div>
  );
}

export default Footer;
