import styles from './footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__logo">
              </div>
              <div className="footer__social">
                <a href="https://www.facebook.com/">
              facebook
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            <div className="footer__menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  ) 
}

export default Footer;