import React,{Component} from 'react';


class Header extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand font-weight-bold font-style-italic" href="#"><b>ShihabCreature</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
            </div>
            
            )
    }
}


export default Header;