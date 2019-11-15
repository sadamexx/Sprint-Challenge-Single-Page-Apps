import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-links">
        <Link to="/WelcomePage">Home</Link>
        <Link to="/CharacterList">View Characters</Link>
      </div>
      </nav>
    </header>
  );
}
