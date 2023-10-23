import {Link} from 'react-router-dom';

const ProductCard = (props) => {
    return(
        <div className="col-md-4 mb-4">
        <div className="card">
          <img
            src="https://placehold.co/500x500"
            alt="Product Image 1"
            className="card-img-top"
          />
          <div key={props.id} className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="price">{props.price}</p>
            <p>{props.id}</p>
            <p><Link to={`/products/${props.link}`}>See more.</Link></p>
            <div className="input-group mb-3"></div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
}

export default ProductCard;