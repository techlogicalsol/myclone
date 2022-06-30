import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate()

    const handleRouteEmpContact = () =>{
        navigate('/empcontactmgr')
    }

    return(
        <>
        
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center"><strong>DASHBOARD</strong></h1>
                        <div className="row">
                            <div className="col-md-4 bg-info p-4">
                                <h2><strong>EMP-Contact Manager</strong></h2>
                                <button
                                 className="btn btn-dark btn-block"
                                 onClick={handleRouteEmpContact}
                                 >
                                     Load Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Dashboard