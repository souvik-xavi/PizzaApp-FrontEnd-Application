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
     <h1 className="text-center">View PizzaOrder</h1>
      <div className="containers">
          <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">pizzaOrderId</th>
                  <th scope="col">quantity</th>
                  <th scope="col">size</th>
                  <th scope="col">totalCost</th>
                  <th scope="col">couponId</th>
                  <th scope="col">customerId</th>
                  <th scope="col">pizzaName</th>
                </tr>
              </thead>
              <tbody>
                
                 {/* {
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
                            <NavLink to="" className="btn btn-primary">Add Pizza</NavLink> &nbsp;
                            <NavLink to="" className="btn btn-info">Update Pizza</NavLink> &nbsp;
                            <NavLink to="" className="btn btn-danger">Delete Pizza</NavLink>
                              </td>
                            </tr>
                      </>
                    )
                  })
                 } */}
                
              </tbody>
            </table>
      </div>
  
      </>
  )
}

export default PizzaOrder