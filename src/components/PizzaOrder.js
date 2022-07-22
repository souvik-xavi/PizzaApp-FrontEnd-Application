import React,{useState, useEffect} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

const PizzaOrder = () => {

    // const history = useHistory();

    const [order, setOrder] = useState([]);
    const temp = useSelector((state) => state);
    var cusId = temp.id;

    const viewOrder = async (e) => {
      const res = await fetch(`http://localhost:8080/viewPizzaOrder/1`, {
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
     <h1 className="text-center">View PizzaOrder</h1>
      <div className="containers">
          <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">pizzaOrderId</th>
                  {/* <th scope="col">quantity</th>
                  <th scope="col">size</th>
                  <th scope="col">totalCost</th> */}
                  <th scope="col">couponId</th>
                  <th scope="col">customerId</th>
                  <th scope="col">pizzaName</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                  order.map((val)=>{
                    return(
                      <>
                            <tr className='mytable'>
                            <td scope="row" className=''>{val.pizzaOrderId}</td>
                            {/* <td>{val.quantiy}</td>
                            <td>{val.size}</td>
                            <td>{val.totalCost}</td> */}
                            <td>{val.couponId}</td>
                            <td>{val.customerId}</td>
                            <td>{val.pizzaName}</td>
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

export default PizzaOrder