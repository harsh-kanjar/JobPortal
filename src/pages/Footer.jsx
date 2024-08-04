function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">How we work</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Artists and Recruiters</h5>
          <ul>
            <li><a href="#">Casting Calls</a></li>
            <li><a href="#">Join our Community</a></li>
            <li><a href="#">Agencies</a></li>
            <li><a href="#">Popular Auditions</a></li>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Find Talent</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <span>Connect with us: </span>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
