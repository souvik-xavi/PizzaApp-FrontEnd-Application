import React, {useState, useEffect} from 'react'
// import axios from 'axios';
//import { useHistory } from "react-router-dom";
import './pizza.css';
import Popup from 'reactjs-popup';


const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);
    const [addPizza, setAddPizza] = useState({
      pizzaType: "",
      pizzaName: "",
      pizzaDescription: "",
      pizzaCost: ""
    });




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
        //console.log("1" + pizzas)
      }
    }
      
     
      const setPizzaDetails = async (e) => {
        const{name,value}=e.target;
        setAddPizza((preData)=>{
          return{
              ...preData,
              [name]:value
          }
      })
      }

      const addPizzaDetails = async (e) => {
        e.preventDefault();
      
        
        const{pizzaType, pizzaName, pizzaDescription , pizzaCost} = addPizza;

        const res = await fetch('http://localhost:8080/addPizza/1',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                pizzaType, pizzaName, pizzaDescription , pizzaCost
            })
        });

        const addData = await res.json();

        if(res.status === 404 || !addData){
            window.alert("Error: Data Not Save");
            console.log("Data Not Saved");
            
        }else{
            window.alert("Data Save Successfully");
        }
         
      
      
      
      };
  
    
    useEffect(()=>{
      viewPizza()
        },[])
        

  return (
    <>
   <h1 className="text-center">Pizza Management</h1>
                              <Popup trigger={<button className="btn btn-primary mx-5 pizzabtn ">Add Pizza</button>} position="right center">
                                 <div className="popup">
                                <h2>Add Pizza</h2>
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="pizzaType">Pizza Type</label>
                                    <input type="text" className="form-control" id="pizzaType" placeholder="Enter Pizza Type" onChange={setPizzaDetails} value={addPizza.pizzaType} name="pizzaType"/>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaName">Pizza Name</label>
                                    <input type="text" className="form-control" id="pizzaName" placeholder="Enter Pizza Name" onChange={setPizzaDetails} value={addPizza.pizzaName} name="pizzaName" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaDescription">Pizza Description</label>
                                    <input type="text" className="form-control" id="pizzaDescription" placeholder="Enter Pizza Description" onChange={setPizzaDetails} value={addPizza.pizzaDescription} name={"pizzaDescription"} />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaCost">Pizza Cost</label>
                                    <input type="text" className="form-control" id="pizzaCost" placeholder="Enter Pizza Cost" onChange={setPizzaDetails} value={addPizza.pizzaCost} name={"pizzaCost"} />
                                  </div>
                                  <button type="submit" className="btn btn-primary" onClick={addPizzaDetails}>Submit</button>
                                </form>
                              </div>
                            </Popup>
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
                            
                            <Popup trigger={<button className="btn btn-primary">Update Pizza</button>} position="right center">
                              <div className="popup">
                                <h2>Update Pizza</h2>
                                <form>
                                  <div>
                                  <label htmlFor="pizzaType">Pizza id</label>
                                    <input type="text" className="form-control" id="pizzaId" placeholder="Enter Pizza id" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaType">Pizza Type</label>
                                    <input type="text" className="form-control" id="pizzaType" placeholder="Enter Pizza Type" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaName">Pizza Name</label>
                                    <input type="text" className="form-control" id="pizzaName" placeholder="Enter Pizza Name" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaDescription">Pizza Description</label>
                                    <input type="text" className="form-control" id="pizzaDescription" placeholder="Enter Pizza Description" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaCost">Pizza Cost</label>
                                    <input type="text" className="form-control" id="pizzaCost" placeholder="Enter Pizza Cost" />
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                              </div>
                            </Popup>
                            <Popup trigger={<button className="btn btn-primary">Delete Pizza</button>} position="right center">
                              <div className="popup">
                                <h2>Delete Pizza</h2>
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="pizzaType">Pizza id</label>
                                    <input type="text" className="form-control" id="pizzaId" placeholder="Enter Pizza id" />
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                              </div>
                            </Popup>
                          </td>
                        </tr>
                    </>
                  )
                }
                )
              }
            </tbody>
          </table>
    </div>
    </>
  );
}

export default Pizza;