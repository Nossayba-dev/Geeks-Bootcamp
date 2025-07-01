import React from 'react';

function Contact() {
  return (
    <footer className="d-flex  flex-column flex-md-row justify-content-between px-3 px-md-5 py-4 bg-light">
        <div className=" flex-fill mb-4 mb-md-0 me-md-4 ">
        <h1 className="">contact us</h1>
        <p className="">contact us and we will get back to you within 24 hours </p>
        <p><i className="bi bi-geo-alt-fill"></i> Company Name </p>
        <p><i className="bi bi-telephone-fill"></i> +256 778 800 900 </p>
        <p><i className="bi bi-envelope-fill"></i> company.gmail.com </p> 
        </div>
        <div className="flex-fill">
        <form >
            <h2>contact</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
                <label htmlFor="comment" className="form-label">comment</label>
                <textarea className="form-control" id="comment" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Send</button>
        </form>
        </div>

    </footer>
  );
}

export default Contact;
