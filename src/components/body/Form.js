import React,{Component} from 'react';


class Form extends Component{
    render(){
        return(
            <div>
                <section className="bg-dark formsec">
  <div className="container">
    <div className="row">
      <div className="col text-white text-center mt-5 mb-3">
        <h3 className="font-weight-bold">It was a bumpy ride</h3>
        <h5>Ipsum dolor sit amet, consectetur adipisicing.</h5>
      </div>
    </div>
    <div className="row">
      <div className="col-sm border border-light text-white text-center my-3 mx-1 p-1 boxsize">
        <span style={{"font-size":"72px"}}>29</span>
        <h4>Failed Attempts</h4>
      </div>
      <div className="col-sm border border-light text-white text-center my-3 mx-1 p-1 boxsize">
        <span style={{"font-size":"72px"}}>29</span>
        <h4>Failed Attempts</h4>
      </div>
      <div className="col-sm border border-light text-white text-center my-3 mx-1 p-1 boxsize">
        <span style={{"font-size":"72px"}}>29</span>
        <h4>Failed Attempts</h4>
      </div>
      <div className="col-sm border border-light text-white text-center my-3 mx-1 p-1 boxsize">
        <span style={{"font-size":"72px"}}>29</span>
        <h4>Failed Attempts</h4>
      </div>
    </div>
    <div className="row" id="contact">
      <div className="col text-white text-center mt-5 mb-3">
        <h3 className="font-weight-bold">Get in Touch!</h3>
        <h5>Ipsum dolor sit amet, consectetur adipisicing.</h5>
      </div>
    </div>
    <div className="row">
      <div className="col my-3 pb-2">
        <h4 className="text-white">Shoot a Message</h4>
      </div>
    </div>
    <form action="backend.php" method="get" acceptCharset="utf-8">
      <div className="row">
        <div className="col">
          <input type="text" className="form-control bg-dark text-white " name id  placeholder="Your Name" />
        </div>
        <div className="col">
          <input type="text" className="form-control bg-dark text-white " name id  placeholder="Your Email" />
        </div>
      </div>
      <div className="row">
        <div className="col my-3">
          <textarea name className="form-control bg-dark text-white " rows={5} cols={30} placeholder="Your Message..." defaultValue={""} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-5">
          <button type="submit" className="btn btn-lg btn-outline-light text-white btn-block ">Send Meesage</button>
        </div>
      </div>
    </form>
  </div>
</section>
            
            </div>
            
            )
    }
}


export default Form;