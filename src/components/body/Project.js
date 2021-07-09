import React,{Component} from 'react';


class Project extends Component{
    render(){
        return(
            <div>
                <section className="bg-dark" id="project">
  <div className="container-fluid">
    <div className="row text-center ">
      <div className="col mt-5 mb-3 bg-light py-2 secradius">
        <h2 className="font-weight-bolder text-dark">PROJECTS</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 mb-2">
        <div className="card">
          <img src="img/prof1.jpg" className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title text-center font-weight-bolder">NetFlix Clone</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="justify-content-center">
              <a href="google.com" target="_blank" className="btn btn-outline-light">Go to The Project</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2">
        <div className="card">
          <img src="img/prof2.jpg" className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title text-center font-weight-bolder">NetFlix Clone</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="justify-content-center">
              <a href="google.com" target="_blank" className="btn btn-outline-light">Go to The Project</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2">
        <div className="card">
          <img src="img/prof5.jpg" className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title text-center font-weight-bolder">NetFlix Clone</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="justify-content-center">
              <a href="google.com" target="_blank" className="btn btn-outline-light">Go to The Project</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2">
        <div className="card">
          <img src="img/prof8.jpg" className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title text-center font-weight-bolder">NetFlix Clone</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="justify-content-center">
              <a href="google.com" target="_blank" className="btn btn-outline-light">Go to The Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
            </div>
            
            )
    }
}


export default Project;