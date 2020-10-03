import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';

const Home = () => (
  <>
    <div style={{ backgroundColor: 'black' }} className="home">
      <div className="btn-cont">
        <button type="button" className="button is-black is-outlined is-rounded"><Link to="/login">LOGIN</Link></button>
        <button type="button" className="button is-black is-outlined is-rounded"><Link to="/signup">SIGNUP</Link></button>
      </div>
      <Slider />
      <div className="desc">
        <h4>Welcome to the Beautiful Tags</h4>
        <p>
          Make your shopping spree for all ladies clothes, shoes and handbags
          <br />
          The prices are very friendly and you can always contact
          the sellers for your favorite items.
          <br />
          signup to get started!
        </p>
      </div>
    </div>
  </>
);

export default Home;
