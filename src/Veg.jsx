import { useDispatch } from 'react-redux';
import './Veg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToCart } from './store';

function veg() {
  let vegitems = [
    {
      id: 1,
      name: "Veg Biryani",
      price: 150,
      image: "/veg-biryani.jpg"
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      price: 180,
      image: "/paneer-butter-masala.jpg"
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      price: 120,
      image: "/veg-fried-rice.jpg"
    },
    {
      id: 4,
      name: "Masala Dosa",
      price: 80,
      image: "/masaladosa.jpg"
    },
    {
      id: 5,
      name: "Idli Sambar",
      price: 60,
      image: "/idli.jpg"
    }
  ];
  //converting vegitens array to veg list items
  let dispatch=useDispatch();
  let veglistitems=vegitems.map(item => (
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
        ))

  return (
    <>
      <h1 className="read-the-docs">This is Veg Page</h1>
      <div className="veg-container">
        
        {veglistitems}
      </div>
    </>
  );
}

export default veg;
