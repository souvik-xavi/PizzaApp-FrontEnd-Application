import React,{useState, useEffect} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

const PizzaOrder = () => {

    const {customer_id} = useParams();

    // const history = useHistory();

    const [order, setOrder] = useState([]);

    const viewOrder = async (e) => {
      const res = await fetch(`http://localhost:8080/viewOrder/admin/${customer_id}`, {
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
        setOrder(data);
        // window.alert("Data Fetch Successfully");
        // console.log("1" + pizzas)
      }
      
     

    };
  
    useEffect(()=>{
        viewOrder()
    },[])

  return (
    <>
        <div className="main">
            {
                order.map((val)=>{
                    return(
                        <>
                        
                            <p>{val.totalCost}</p>
                            <p>{val.couponId}</p>
                            <p>{val.pizzaName}</p>
                            <p>{val.totalCost}</p>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default PizzaOrder