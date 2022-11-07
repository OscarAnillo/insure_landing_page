export default function FooterComponent(){
    return (
        <footer className="footer">
            <section className="footer-section">
                <div>
                    <img src="images/logo.svg" alt="" className="footer-logo" />
                </div>
                <div className="socials">
                    <img src="images/icon-facebook.svg" alt="" />
                    <img src="images/icon-twitter.svg" alt="" />
                    <img src="images/icon-pinterest.svg" alt="" />
                    <img src="images/icon-instagram.svg" alt="" />
                </div>
            </section>
            <section className="sources">
                <div>
                    <p className="main-item">Our Company</p>
                    <p>How we work</p>
                    <p>Why Insure?</p>
                    <p>Check Price</p>
                    <p>Reviews</p>
                </div>
                <div>
                    <p className="main-item">Help Me</p>
                    <p>Faq</p>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
                <div>
                    <p className="main-item">Contact</p>
                    <p>Sales</p>
                    <p>Support</p>
                    <p>Live Chat</p>
                </div>
                <div>
                    <p className="main-item">Others</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Licenses</p>
                </div>
            </section>
        </footer>
    )
}