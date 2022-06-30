import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import fireDb from '../firebase'

function View(){

    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fireDb.child(`contact-manager/${id}`).get().then((snapshot)=>{
            if(snapshot.exists()){
                setUser({...snapshot.val()})
            
            }else{
                setUser({})
            }
        })
    },[id])

    console.log("user", user)

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 p-5 mx-auto">
                        <h3 className="text-center">Employee Detail</h3>

                        <div className="row">
                            <div className="col-md-12 p-3 mt-3 bg-light">
                                <div className="viewDetail">
                                    <span>EmpID:</span>
                                    <span>{user.empId}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>First Name:</span>
                                    <span>{user.fname}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Last Name:</span>
                                    <span>{user.lname}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Department:</span>
                                    <span>{user.dept}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Mobile:</span>
                                    <span>{user.mobile}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Home Phone:</span>
                                    <span>{user.homePhone}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Email:</span>
                                    <span>{user.email}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Address:</span>
                                    <span>{user.address}</span>
                                </div>

                                <div className="viewDetail">
                                    <span>Status:</span>
                                    <span>{user.status}</span>
                                </div>
                                </div>

                                <Link className="myLink" to={"/"}>
                                
                                <button className="btn btn-outline-dark mt-2" style={{width: "100%"}}>
                                    Home
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default View