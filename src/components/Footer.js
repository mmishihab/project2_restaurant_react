import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
  <div className="container-fluid">
    <div className="row">
      <div className="col text-center mt-5 text-black">
        <em>Work hard in Silence,let your success be your noise</em>
        <p>Frank Ocean</p>
      </div>
    </div>
    <div className="row mb-3 text-center">
      <div className="col">
        <div className="circleIcon bg-dark">
          <i className="fab fa-facebook-f" />
        </div>
        <div className="circleIcon bg-dark">
          <i className="fab fa-youtube" />
        </div>
        <div className="circleIcon bg-dark">
          <i className="fab fa-github" />
        </div>
      </div>
    </div>
    <div className="row bg-dark">
      <div className="col text-white text-center">
        <h5>© Allright Reserved by Mujahidul Islam Shihab</h5>
      </div>
    </div>
  </div>
</footer>
            
            </div>
            
            )
    }
}


export default Footer;