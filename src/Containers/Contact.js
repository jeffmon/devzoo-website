import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact_box_container">
        <form action="POST">
          <input type="text" name="name" placeholder="FULL NAME" />
          <br />
          <input type="text" name="email" placeholder="EMAIL" />
          <br />
          <textarea name="message" cols="30" rows="10" placeholder="MESSAGE" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
