import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john Doe",
        email: "john@email.com",
        phone: "978729809"
      },
      {
        id: 2,
        name: "Karen Doe",
        email: "karen@email.com",
        phone: "978729809"
      },
      {
        id: 3,
        name: "Jack Doe",
        email: "jack@email.com",
        phone: "978729809"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
