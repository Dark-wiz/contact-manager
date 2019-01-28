import React, { Component } from "react";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter phone"
                name="phone"
                value={phone}
                onChange={this.onChange}
              />
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;