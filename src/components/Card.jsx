import './Card.css';

const Card = ({ productInfo, handleAddToCart }) => {
    return (
        <>
            <div className="card cardContainer shadow">
                <img src={productInfo.image} className="card-img-top mx-auto cardImg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productInfo.title}</h5>
                    <p className="card-text">{productInfo.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{productInfo.category}</li>
                    <li className="list-group-item">Rating - {productInfo.rating.rate} <br /> Count - {productInfo.rating.count}</li>
                    <li className="list-group-item">Price: <b>{productInfo.price}</b></li>
                </ul>
                <button 
                    className="btn btn-primary m-4 w-75 mx-auto" 
                    onClick={() => handleAddToCart(productInfo)} // Wrap the call in an arrow function
                >
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default Card;
