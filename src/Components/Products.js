import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Products = ({ props }) => {
  const {
    name, price, id, image, description,
  } = props;
  return (
    <div className="preview shadow">
      <Link to={`/items/${id}`}>
        <div className="item-img">
          <img className="img-itm" src={`${image.url}`} alt="pictur" />
        </div>
        <div className="prev-text">
          <div>
            <p>{name}</p>
            <p />
            $
            {' '}
            {price}
          </div>
          <div>
            <i className="star" />
            <i className="star" />
            <i className="star" />
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Products.defaultProps = {
  name: '',
  image: {},
  price: 0,
  id: 0,
  description: '',
  props: {},
};

Products.propTypes = {
  name: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  id: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  props: PropTypes.shape({}),
};

export default Products;
