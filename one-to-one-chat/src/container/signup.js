import React, {Component} from "react";
import {TextField, Paper, RaisedButton} from "material-ui";
import {loginAction} from "../store/action";
import {connect} from "react-redux";
function mapStateToProps(state) {
    return {isSignUp: state.isSignUp}
}

class SignUpCont extends Component {
    handleSignup() {
        var credentials = {};
        credentials.name = this
            .refs
            .name
            .getValue();
        credentials.email = this
            .refs
            .email
            .getValue();
        credentials.password = this
            .refs
            .pass
            .getValue();
        this
            .props
            .dispatch(loginAction.SignUp(credentials))

    }
    render() {
        return (
            <div
                style={{
                width: "400px",
                margin: "20px auto",
                textAlign: "center"
            }}>
                <Paper zDepth={3}>
                    
                    <h1>SignUp</h1>
                    <TextField floatingLabelText="Type your name" ref="name" fullWidth={true}/>
                    <br/>
                    <TextField floatingLabelText="Type your email" ref="email" fullWidth={true}/>
                    <br/>
                    <TextField
                        floatingLabelText="type your password"
                        ref="pass"
                        type="password"
                        fullWidth={true}/>
                    <br/>
                    <RaisedButton
                        fullWidth={true}
                        onClick={this
                        .handleSignup
                        .bind(this)}>SignUp</RaisedButton>
                </Paper>
            </div>
        )
    }
}
export default connect(mapStateToProps)(SignUpCont);