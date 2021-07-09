import React,{Component} from 'react';


class Portfolio extends Component{
    render(){
        return(
            <div>
                <section id="portfolio">
  <div className="container-fluid bg-light ">
    <div className="row text-center ">
      <div className="col mt-5 mb-3 bg-dark py-2 secradius">
        <h2 className="font-weight-bolder text-white">PORTFOLIO</h2>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof3.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof7.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof7.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof3.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof7.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card">
          <div className="card-body">
            <img src="img/prof7.jpg" alt className="img-fluid" />
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


export default Portfolio;