import { useDispatch } from 'react-redux';
import { addToCart } from './store';
import './Veg.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function cooldrinks() {

  let cooldrinks = [
    {
      id: 1,
      name: "Coca Cola",
      price: 40,
      image: "/images/cocacola.jpg"
    },
    {
      id: 2,
      name: "Pepsi",
      price: 40,
      image: "/images/pepsi.jpg"
    },
    {
      id: 3,
      name: "Sprite",
      price: 40,
      image: "/images/sprite.jpg"
    },
    {
      id: 4,
      name: "Thumbs Up",
      price: 45,
      image: "/images/thumsup.jpg"
    },
    {
      id: 5,
      name: "Maaza",
      price: 35,
      image: "/images/maaza.jpg"
    },
    {
      id: 6,
      name: "Frooti",
      price: 30,
      image: "/images/frooti.jpg"
    }
  ];
let dispatch=useDispatch();
  let cooldrinklistitems = cooldrinks.map(item => (
    <div className="card" style={{ width: "14rem" }} key={item.id}>
      <img src={item.image} className="card-img-top" height="150" />

      <div className="card-body text-center">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text"><b>₹{item.price}</b></p>
              <button
          className="btn btn-success btn-sm"
          onClick={() => dispatch(addToCart(item))}
        >
          AddtoCart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-center">Cool Drinks</h1>
      <div className="d-flex flex-wrap gap-3">
        {cooldrinklistitems}
      </div>
    </>
  );
}

export default cooldrinks;
