export default function NavComponent(){
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
                <div>
                    <img src="images/icon-hamburger.svg" alt="" />
                </div>
            </section>
        </nav>
    )
}