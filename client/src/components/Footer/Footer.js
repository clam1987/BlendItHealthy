import React, { useState } from "react";
import "../Footer/Footer.css";

let Footer = () => {
  const [email, setEmail] = useState("");

  let validateEamil = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  let handleChange = e => {
    setEmail(e.target.value);
  };

  let handleSubmit = () => {
    if (validateEamil(email)) {
      return console.log("valid");
    } else {
      return console.log("not valid");
    }
  };
  return (
    <footer className="page-footer font-small pt-4">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4 className="footerHeader">
              Don't miss out on Health Facts, Promotions, and Events from us!
            </h4>
            <p className="t1">
              Get the latest information delivered to your inbox. Unsubscribe at
              anytime.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mb-4">
            <form className="input-group">
              <input
                type="text"
                className="form-control border-right-0 border-success shadow-none py-4 pr-4 mr-n5 bg-transparent footerInput"
                placeholder="enter email address"
                aria-label="Your email"
                aria-describedby="basic-addon2"
                value={email}
                onChange={handleChange}
              />
              {/* <div className="input-group-append"> */}
              <button
                className="btn btn-sm btn-outline-white my-0 subBtn"
                type="button"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md d-flex justify-content-center">
            <p id="contact">Contact Us:</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-square"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="fab fa-instagram"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-yelp"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <p className="info">BLEND IT HEALTHY</p>
          </div>
          <div className="col-sm-3">
            <p className="info">(626) 656-3718</p>
          </div>
          <div className="col-sm-6">
            <p className="address">
              411 E Huntington Drive, St. 114, Arcadia, CA 91006
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
