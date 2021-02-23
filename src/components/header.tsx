import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-site">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
