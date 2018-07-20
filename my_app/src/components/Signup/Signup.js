import React, { Component } from 'react';
import './style.css';
import signup from '../../services/signup';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    }

    //Un evento recibe el elemento de HTML que está realizando el evento.
    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    validatePasswords = (pwd1, pwd2) => {
        return pwd1 === pwd2;
    }

    onFormSubmit = (event) => {
        //preventDefault impide que el evento realicé su acción default, en este caso recargarse.
        event.preventDefault();
        if (this.validatePasswords(this.state.password, this.state.confirm_password)) {
            signup(this.state).then((response) => {
                console.log(response);
                alert("Has creado un nuevo usuario");

            }).catch((err) => {
                console.log(err);
                alert("Lo sentimos, parece que hay un problema al crear tu nuevo usuario");
            })

        }
        else {
            alert("Las password que ingresaste no coinciden")
        }


    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center centered-form ">
                    <div className="col-xs-12 col-sm-8 col-md-10 col-sm-offset-2 col-md-offset-4">
                        <div className="panel panel-default container">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sign up for Bootsnipp <small>It's free!</small></h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={this.onFormSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control input-sm" placeholder="First Name" value={this.state.name}
                                                    onChange={this.checkOnInput} />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="last_name" id="name" className="form-control input-sm" placeholder="Last Name" value={this.state.last_name} onChange={this.checkOnInput} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" value={this.state.email} onChange={this.checkOnInput} />
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" value={this.state.password} onChange={this.checkOnInput} />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="confirm_password" id="confirm_password" className="form-control input-sm" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.checkOnInput} />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="submit" value="Register" className="btn btn-info btn-block" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;