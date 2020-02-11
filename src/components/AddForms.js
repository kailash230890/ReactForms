import React, { Component } from "react";

class AddForms extends Component {
  state = {
    firstname: null,
    lastname: null,
    age: null,
    contactNo: null,
    email: null,
    password: null
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Last Name:</label>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Age:</label>
            <input
              type="text"
              name="age"
              placeholder="age"
              maxLength="2"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">ContactNo:</label>
            <input
              type="text"
              name="contactNo"
              placeholder="contactNo"
              maxLength="10"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="name">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddForms;
