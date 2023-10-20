const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, quia?
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <a href="#" className="text-white mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mr-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mr-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;