import React, { Component } from 'react';
import './style.css';
import login from '../../services/login';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        login(this.state).then((resp) => {
            if (resp.status === 201) {
                let token = resp.data.token;
                localStorage.setItem('token', token);
                alert("Log exitoso");
            }
            else {
                alert(resp.data);
            }

        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="row justify-content-center bg-light">
                <div className="col-md-10 col-lg-8">
                    <form onSubmit={this.submitForm}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.checkOnInput} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.checkOnInput} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;