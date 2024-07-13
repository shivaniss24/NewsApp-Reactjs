import React,{Component} from 'react'
// import Link from 'react';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <as className="navbar-brand" to="#">Navbar</as>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
       
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/buisness">Buisness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/general">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/technology">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/sports">Sports</a>
        </li>

      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar