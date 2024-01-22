import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section__padding">
        <div className="sb_footer-links">
          <div className="sb__footer-links-div">
            <h4 className="useful-info-text">Useful Information</h4>
            <hr></hr>
            <a
              href="https://www.youtube.com/watch?v=WUHf2NrKn74"
              target="_blank"
            >
              <p className="text-placeholder-footer">Terms & Conditions</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=1K18w1I9gqU"
              target="_blank"
            >
              <p className="text-placeholder-footer">Address</p>
            </a>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
              <p className="text-placeholder-footer">
                Plans
              </p>
            </a>
            <a href="https://youtu.be/GV4ddXbLDd8" target="_blank">
              <p className="text-placeholder-footer">
                Help
              </p>
            </a>
          </div>
        </div>
        <div className="sb__footer-below">
          <div className="sb_footer-copyright">
            <p>{new Date().getFullYear()} Pet-Care. All rights reserved.</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Footer;
