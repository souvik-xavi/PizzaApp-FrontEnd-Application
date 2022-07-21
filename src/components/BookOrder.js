import React, {useState, useEffect} from 'react'
// import axios from 'axios';
import { NavLink } from "react-router-dom";
//import './pizza.css';
import './BookOrder.css';

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);

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
  
    useEffect(()=>{
      viewPizza()
    },[])
  
  return (
    <>
   <h1 className="text-center">Order Pizza</h1>
    <div className="containers">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Pizza Type</th>
                <th scope="col">Pizza Name</th>
                <th scope="col">Pizza Description</th>
                <th scope="col">Pizza Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              
               {
                pizzas.map((val)=>{
                  return(
                    <>
                          <tr className='mytable'>
                          <td scope="row" className=''>{val.pizzaId}</td>
                          <td>{val.pizzaType}</td>
                          <td>{val.pizzaName}</td>
                          <td>{val.pizzaDescription}</td>
                          <td>{val.pizzaCost}</td>
                          <td>
                          <NavLink to="/orderpizza" className="btn btn-primary">Book Pizza</NavLink> &nbsp;
                          {/* <NavLink to="" className="btn btn-info">Update Pizza</NavLink> &nbsp;
                          <NavLink to="" className="btn btn-danger">Delete Pizza</NavLink> */}
                            
                            </td>
                            <label>Coupon Id:</label>
                            <input type="text" className="Order"></input><br></br>
                             <label>Quantity:</label>
                             <input type="text"className="Order"></input>
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

export default Pizza;