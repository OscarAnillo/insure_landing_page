export default function NavComponent({ showMenu, clickHandler }){
    return (
        <nav className="nav">
            <section>
                <div>
                    <img src="images/logo.svg" alt="" />
                </div>
                <div className="desktop-nav">
                    <ul>
                        <li>How we work</li>
                        <li>blog</li>
                        <li>Account</li>
                        <li>View plans</li>
                    </ul>
                </div>
                <div onClick={clickHandler} className="mobile-nav"> 
                {!showMenu ? <img src="images/icon-hamburger.svg" alt="" />
                : <img src="images/icon-close.svg" alt="" />
                }
                </div>
            </section>
            {showMenu && 
            <div className="inner-menu">
                <div>
                    <h2>How we work</h2>
                    <h2>Blog</h2>
                    <h2>Account</h2>
                    <h2>View Plans</h2>
                </div>
                <div className="inner-menu-bg"></div>
            </div>
            }
        </nav>
    )
}