import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xnqeaepp"
            method="POST"
            
          >
            <input
            name="email"
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
