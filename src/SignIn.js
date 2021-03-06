import React, { Component } from "react";
import axios from "axios";
import "./signin.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.logIn = this.logIn.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    componentDidMount(){
    this.nameInput.focus();
    axios.get('/articles').then(response => console.log("success"));
    }
    render() {
        return (
            <div className="SignIn-main">
                <h1 className="signin_header">Welcome to PaperBoy</h1>
                <h3 className="signin_header3">All your News Delivered</h3>
                <h2 className="signin_header2">Please Sign In</h2>

                <input
                    ref={(input) => { this.nameInput = input; }}
                    className="input"
                    onChange={this.setUserName}
                    placeholder="username"
                />
                <input
                    className="input"
                    onChange={this.setPassword}
                    placeholder="password"
                />
                <button className="button" onClick={this.logIn}>
                    {" "}Log In
                    {" "}
                </button>
                <h2 className="signin_header2"> Or Create Account </h2>
                <input
                    className="input"
                    onChange={this.setUserName}
                    placeholder="username"
                />
                <input
                    className="input"
                    onChange={this.setPassword}
                    placeholder="password"
                />
                <button className="button" onClick={this.createAccount}>
                    {" "}Create Account
                    {" "}
                </button>
                <div className="icon" />
            </div>
        );
    }
    setUserName(event) {
        this.setState({ username: event.target.value });
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    logIn() {
        axios
            .get("/users", {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {

                    console.log(response);
                    console.log(response.data.views);
                    console.log(response.data.user_id);
                    console.log(response.data.feed_id);
                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id,
                        response.data.feed_id
                    );
                }.bind(this)
            );
    }
    createAccount() {
        axios
            .post("/users", {
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {

                  console.log(response.data);

                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id,
                        response.data.feed_id
                    );
                }.bind(this)
            );
    }
}
export default SignIn;
