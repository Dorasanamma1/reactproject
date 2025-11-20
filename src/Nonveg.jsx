import { useDispatch } from 'react-redux';
import { addToCart } from './store';
import './Veg.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nonveg() {
  let nonvegitems = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 200,
      image: "/images/chicken-biryani-5.jpg"
    },
    {
      id: 2,
      name: "Mutton Biryani",
      price: 280,
      image: "/images/mutton-biryani.jpg"
    },
    {
      id: 3,
      name: "Chicken Curry",
      price: 180,
      image: "/images/chicken-curry.jpg"
    },
    {
      id: 4,
      name: "Mutton Curry",
      price: 260,
      image: "/images/mutton-curry.jpg"
    },
    {
      id: 5,
      name: "Fish Fry",
      price: 150,
      image: "/images/fishfry.webp"
    },
    {
      id: 6,
      name: "Prawns Fry",
      price: 220,
      image: "/images/prawns-fry.jpg"
    }
  ];
  let dispatch=useDispatch();
  let nonveglistitems = nonvegitems.map(item => (
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
      <h1 className="text-center">This is nonveg</h1>
      <div className="d-flex flex-wrap gap-3">
        {nonveglistitems}
      </div>
    </>
  );
}

export default Nonveg;
