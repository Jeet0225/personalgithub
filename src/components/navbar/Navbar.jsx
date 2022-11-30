import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub} from "react-icons/bs"
const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="/"> <BsGithub style={{marginRight:"15px"}}/> Personal - Github</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
</nav>
    </div>
  )
}

export default Navbar