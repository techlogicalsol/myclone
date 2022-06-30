// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import fireDb from '../firebase';



// const intialState = {
//     name: '',
//     email: '',
//     contact: ''
// }

// function Add(){

//     const [state, setState] = useState(intialState)
//     const [data, setData] = useState({})

//     const {name, email, contact} = state;

//     const handleInputChange = (e)=>{
//         const {name, value} = e.target
//         setState({...state, [name]: value})
//     }

//     const navigate = useNavigate()

//     const handleSubmit = (e)=>{
//                 e.preventDefault()
//                 if (!name || !email || !contact){
//                     toast.error("Please provide value to each input field")
                
//                 }else{
//                     fireDb.child("contact-manager").push(state, (err)=> {
//                         if(err){
//                             toast.error(err)
                        
//                         }else{
//                             toast.success("Contact added successfully....")
//                         }
//                     });
//                     setTimeout(()=> navigate.push("/"), 500)
//                 }
//             }
        
//     return(
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     value={name}
//                     name="name"
//                     // onChange={handleInputChange}
//                     onChange={()=> setState(name)}
//                 />
//                 <label>Email</label>
//                     <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={()=> setState(name)}
//                 />
//                 <label>Contact</label>
//                     <input
//                     type="text"
//                     name="contact"
//                     value={contact}
//                     onChange={()=> setState(name)}
//                 />
//                 <input type="submit" value="Save"/>
//             </form>
        
        
//         </>
//     )
// }

// export default Add