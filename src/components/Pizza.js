import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './pizza.css';

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
      <h1 className='heading'>View Pizza</h1>
      <div className="card_body">
        <div className="card">
          {
            pizzas.map((val)=>{
              return(
                <>
                  {/* <p>{val.}</p> */}
                  <p>{val.pizzaType}</p>
                  <p>{val.pizzaName}</p>
                  <p>{val.pizzaDescription} </p>
                  <p>{val.pizzaCost}</p>
                </>
              )
            })
          }
        </div>
      </div>

    </>
)
}

export default Pizza