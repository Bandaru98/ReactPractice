
import React, { Component } from 'react';

class FormValidation extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        firstnameErr: "",
        lastnameErr: "",
        emailErr: "",
        phonenumberErr: ""
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted Successfully');
        this.validation();
    };

    validation = () => {
        let firstnameErr = "";
        let lastnameErr = "";
        let emailErr = "";
        let phonenumberErr = "";

        if (this.state.firstname.length < 3) {
            firstnameErr = "Minimum three letters are required";
        }

        if (this.state.lastname.length < 3) {
            lastnameErr = "Too short";
        }

        if (!this.state.email.includes("@")) {
            emailErr = "Email address is invalid";
        }

        if (this.state.phonenumber.length !== 10) {
            phonenumberErr = "Invalid phonenumber";
        }

        // Update the state with error messages
        if (firstnameErr || lastnameErr || emailErr || phonenumberErr) {
            this.setState({ firstnameErr, lastnameErr, emailErr, phonenumberErr });
            return false;
        }

        // return true;
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 mt-4'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Contact Us</h2>
                            <input
                                className='form-control mt-1'
                                type="text"
                                placeholder='Enter Your firstname'
                                name='firstname'
                                onChange={this.handleChange}
                                value={this.state.firstname}
                            />
                            <p className='text-danger'>{this.state.firstnameErr}</p>

                            <input
                                className='form-control mt-1'
                                type="text"
                                placeholder='Enter Your lastname'
                                name='lastname'
                                onChange={this.handleChange}
                                value={this.state.lastname}
                            />
                            <p className='text-danger'>{this.state.lastnameErr}</p>

                            <input
                                className='form-control mt-1'
                                type="text"
                                placeholder='Enter Your email'
                                name='email'
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <p className='text-danger'>{this.state.emailErr}</p>

                            <input
                                className='form-control mt-1'
                                type="text"
                                placeholder='Enter Your phonenumber'
                                name='phonenumber'
                                onChange={this.handleChange}
                                value={this.state.phonenumber}
                            />
                            <p className='text-danger'>{this.state.phonenumberErr}</p>
                            <button className='btn btn-primary mt-1'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        );
    }
}

export default FormValidation;
