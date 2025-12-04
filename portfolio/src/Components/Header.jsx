import '../Styles/Header.css'
export default function Header(){
    return(
        <header>
            <nav>
                <img src="/Images/Logo/unnamed.png" alt="Logo" className="logo"/>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>

    )
}

