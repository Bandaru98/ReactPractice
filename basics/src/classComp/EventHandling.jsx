
import React from 'react';

const EventHandling = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
    // console.log(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Successfully');
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control mt-2"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control mt-2"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="form-control mt-2"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control mt-2"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHandling;
