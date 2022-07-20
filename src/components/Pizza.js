import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './pizza.css';

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);

    const viewPizza = async ()=>{
      try {
        const res = await axios.get(`http://localhost:8080/viewPizza`);
        console.log(res.data);
      } catch (error) {
        console.log("Error Found")
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