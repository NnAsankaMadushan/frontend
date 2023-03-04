import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="loginbox">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        <p className="loginN">Log In :</p>
                        <div className="inputbox">
                            
                            <form className="loginbox-content">
                                <div class="mb-3">
                                    <label for="Username" class="form-label"><b>User Name</b></label>
                                    <input type="UserName" class="form-control" id="Username" aria-describedby="UserNameHelp" placeholder="Enter Username"></input>
                                    <div id="UserNameHelp" class="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><b>Password</b></label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the Password"></input>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" ></input>
                                    <label class="form-check-label" for="exampleCheck1">Remember username</label>
                                </div>
                                <button type="Log In" class="btn btn-primary">LOG IN</button>
                            </form>
                            
                        </div>
                    </div>
                    {/*column2*/}
                    <div className="col">
                    <p className="loginN">Register :</p>
                    <div className="loginbox-content">
                        <div className="student" >
                            <a href="/student" >
                                <button type="Submit" class="s text-white">Register as a Student</button>
                            </a>
                        </div>
                        <div className="lecturer">
                            <button type="Submit" class="l text-white">Register as a Lecturer</button>
                        </div>
                        <div className="company">
                            <button type="Submit" class="l text-white">Register as a Company</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

