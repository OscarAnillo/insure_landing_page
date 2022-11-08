export default function HeroComponent(){
    return (
        <div className="hero-bg">
            <div className="hero-container">
                <div>
                    <img src="images/image-intro-mobile.jpg" alt="" className="mobile-img-intro" />
                    <img src="images/image-intro-desktop.jpg" alt="" className="desktop-img-intro" />
                </div>
                <div>
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <button>View plans</button>
                </div>
            </div>
            <div className="mobile-left-intro desktop-left-intro"></div>
            <div className="mobile-right-intro desktop-right-intro"></div>
        </div>
    )
}