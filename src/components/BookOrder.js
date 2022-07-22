import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import { NavLink } from "react-router-dom";
//import './pizza.css';

import Popup from 'reactjs-popup';
import './BookOrder.css';
import { useSelector } from "react-redux";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState({ pizza_id: "", coupon_id: "", quantity: "" });

  const temp = useSelector((state) => state);
  var cusId = temp.id;
  
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]:e.target.value });
  }

  const submit = (e) => {
    e.preventDefault();
    const pizzaData = {
      pizza_id: order.pizza_id,
      coupon_id: order.coupon_id,
      quantity: order.quantity
    }
    console.log(pizzaData);
    console.log(cusId);
  }

  
  

  const viewPizza = async (e) => {
    const res = await fetch(`http://localhost:8080/viewPizza`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      window.alert("Error: Data Not Fetch");
      console.log("Data Not Fetch");
    } else {
      setPizzas(data);
      // window.alert("Data Fetch Successfully");
      console.log("1" + pizzas)
    }



  };

  useEffect(() => {
    viewPizza()
  }, [])



  return (
    <>
      <h1 className="text-center">Order Pizza</h1>
      <Popup trigger={<button className="btn btn-primary">Book Pizza Order</button>} position="right center">
        <div className="popup">
          <h2>Book Pizza Order</h2>
          <form onSubmit={submit}>
            <div>
              <label>Pizza id</label>
              <input name="pizza_id" onChange={handleChange} value={order.pizza_id} type="text" className="form-control" placeholder="Enter Pizza id" />
            </div>
            <div>
              <label htmlFor="couponId">Coupon Id</label>
              <input name="coupon_id" onChange={handleChange} value={order.coupon_id} type="text" className="form-control" placeholder="Enter Coupon Id" />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input name="quantity" onChange={handleChange} value={order.quantity} type="text" className="form-control" placeholder="Enter Quantity" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </Popup>

      <div className="containers">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Pizza Id</th>
              <th scope="col">Pizza Type</th>
              <th scope="col">Pizza Name</th>
              <th scope="col">Pizza Description</th>
              <th scope="col">Pizza Cost</th>
            </tr>
          </thead>
          <tbody>

            {
              pizzas.map((val) => {
                return (
                  <>
                    <tr className='mytable'>
                      <td scope="row" className=''>{val.pizzaId}</td>
                      <td>{val.pizzaType}</td>
                      <td>{val.pizzaName}</td>
                      <td>{val.pizzaDescription}</td>
                      <td>{val.pizzaCost}</td>
                      {/* <td>
                          <NavLink to="/orderpizza" className="btn btn-primary">Book Pizza</NavLink> &nbsp;
                            
                          </td>
                            <label>Coupon Id:</label>
                            <input type="text" className="Order"></input><br></br>
                             <label>Quantity:</label>
                             <input type="text"className="Order"></input>  */}
                    </tr>
                  </>
                )
              })
            }

          </tbody>
        </table>
      </div>

    </>
  )
}

export default Pizza;