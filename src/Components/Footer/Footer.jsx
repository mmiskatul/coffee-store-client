import React from "react";
import { Link } from "react-router-dom";
import bgimage from '../../assets/Rectangle 18.png'

function Footer() {
  return (
    <div>
      <footer className="w-full flex justify-center footer sm:footer-horizontal bg-white text-black p-10  " style={{backgroundImage: `url(${bgimage})` }}>
        
       <div className="" >
        <div>
            h
        </div>
       </div>
       <div className="">
         <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
       </div>
      </footer>
    </div>
  );
}

export default Footer;
