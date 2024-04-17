import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="leftH">
        {/* replace with cointhoth logo */}
        <h1>LOGO</h1>
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          {/* replace with eth logo */}
          <h1>ETH</h1>
        </div>
        <div className="connectButton">
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header