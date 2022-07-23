import React, {useState, useEffect} from 'react'
// import axios from 'axios';
//import { useHistory } from "react-router-dom";
import './pizza.css';
import Popup from 'reactjs-popup';
import { useSelector } from "react-redux";
import axios from 'axios';


const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);
    const [addPizza, setAddPizza] = useState({
      pizzaType: "",
      pizzaName: "",
      pizzaDescription: "",
      pizzaCost: ""
    });


    const [pizzaType, setPizzaType] = useState("");
    const [pizzaName, setPizzaName] = useState("");
    const [pizzaDescription, setPizzaDescription] = useState("");
    const [pizzaCost, setPizzaCost] = useState("");
    const [pizzaId, setPizzaId] = useState();

    const temp = useSelector((state) => state);
    var cusId = temp.id;

   










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

        const res = await fetch(`http://localhost:8080/addPizza/1`,
        {
          //${cusId}
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({pizzaType, pizzaName, pizzaDescription , pizzaCost})
        });

        const addData = await res.json();

        if(res.status === 404 || !addData){
            window.alert("Error: Data Not Save");
            console.log("Data Not Saved");
            
        }else{
            window.alert("Data Save Successfully");
        } 
        viewPizza()         
      };








      const setUpdatePizzaDetails = (e)=>{
        const{name,value} = e.target;

        setAddPizza((preData)=>{
            return{
                ...preData,
                [name]:value
            }
        })
    }
    










    const addUpdatePizzaDetails = async (e,pID) => {
      e.preventDefault();
      const obj={"pizzaId":pID,"pizzaType":pizzaType,"pizzaName":pizzaName,"pizzaDescription":pizzaDescription,"pizzaCost":pizzaCost}
      try {
        console.log(obj);
        console.log(pID);
        const response = await axios.put(`http://localhost:8080/updatePizza/1`,obj);
         console.log(response);
      } catch (error) {
        console.log(error);
      }    
      
      console.log(pizzaId, pizzaType, pizzaName, pizzaDescription, pizzaCost);
      viewPizza();
    }








  


      const delPizza = async (delpiz) => 
      {
        try {
          const res = await fetch(`http://localhost:8080/delPizza/${delpiz}/1`,
          {
              method:"delete",
              
          });
          const postDelete = await res.json();
  
          if(postDelete){
              const newData = postDelete.filter((item)=>{
                  return item._id !== postDelete._id
              });
              setPizzas(newData);
              window.alert("Data Delete Successfully");
              }
          
      } catch (error) {
          console.log(error)
        }
        viewPizza()
      }




  
    
    useEffect(()=>{
      viewPizza()
        },[])
        

  return (
    <>
   <h1 className="text-center">Pizza Management</h1>
                              <Popup trigger={<button className="btn btn-primary mx-5 pizzabtn ">Add Pizza</button>} position="right center">
                                 <div className="popup">
                                <h2>Add Pizza</h2>
                                <form className="addPizzaForm">
                                  <div className="form-group">
                                    <label className="mylabel" htmlFor="pizzaType">Pizza Type</label>
                                    <input type="text" className="form-control" id="pizzaType" placeholder="Enter Pizza Type" onChange={setPizzaDetails} value={addPizza.pizzaType} name="pizzaType"/>
                                  </div>
                                  <div className="form-group">
                                    <label className="mylabel" htmlFor="pizzaName">Pizza Name</label>
                                    <input type="text" className="form-control" id="pizzaName" placeholder="Enter Pizza Name" onChange={setPizzaDetails} value={addPizza.pizzaName} name="pizzaName" />
                                  </div>
                                  <div className="form-group">
                                    <label className="mylabel" htmlFor="pizzaDescription">Pizza Description</label>
                                    <input type="text" className="form-control" id="pizzaDescription" placeholder="Enter Pizza Description" onChange={setPizzaDetails} value={addPizza.pizzaDescription} name="pizzaDescription" />
                                  </div>
                                  <div className="form-group">
                                    <label className="mylabel" htmlFor="pizzaCost">Pizza Cost</label>
                                    <input type="text" className="form-control" id="pizzaCost" placeholder="Enter Pizza Cost" onChange={setPizzaDetails} value={addPizza.pizzaCost} name="pizzaCost" />
                                  </div>
                                  <button type="submit" className="btn btn-primary" onClick={addPizzaDetails}>Submit</button>
                                </form>
                              </div>
                            </Popup>
    <div className="containers">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Pizza ID</th>
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
                            
                            
                            <Popup trigger={<button className="btn btn-primary" onClick={()=>setPizzaId(val.pizzaId)} >Update Pizza</button>} position="right center">
                              <div className="popup">
                                <h2>Update Pizza</h2>
                                <form className="addPizzaForm">
                                  <div>
                                  <label htmlFor="pizzaType">Pizza id</label>
                                    <input type="text" className="form-control" id="pizzaId" placeholder="Enter Pizza id" value={val.pizzaId} readOnly = {true} />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaType">Pizza Type</label>
                                    <input type="text" className="form-control" id="pizzaType" onChange={(e)=>setPizzaType(e.target.value)} placeholder={val.pizzaType} name="pizzaType" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaName">Pizza Name</label>
                                    <input type="text" className="form-control" id="pizzaName" onChange={(e)=>setPizzaName(e.target.value)} placeholder={val.pizzaName} name="pizzaName" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaDescription">Pizza Description</label>
                                    <input type="text" className="form-control" id="pizzaDescription" onChange={(e)=>setPizzaDescription(e.target.value)} placeholder={val.pizzaDescription} name="pizzaDescription" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pizzaCost">Pizza Cost</label>
                                    <input type="text" className="form-control" id="pizzaCost" onChange={(e)=>setPizzaCost(e.target.value)} placeholder={val.pizzaCost} name="pizzaCost" />
                                  </div>
                                  <button type="submit" className="btn btn-primary" onClick={(e)=>addUpdatePizzaDetails(e,val.pizzaId)} >Submit</button>
                                </form>
                              </div>
                            </Popup>
                            &nbsp; &nbsp; &nbsp;  &nbsp;
                            <button className="btn btn-primary" onClick={()=>delPizza(val.pizzaId)} >Delete Pizza </button>
                            
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