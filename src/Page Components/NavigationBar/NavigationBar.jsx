//import { useNavigate } from 'react-router-dom';
import './NavigationBar.css'

/*
function NavigationBar() {
    const navigationController = useNavigate()
    const pageDictionary = new Map([
        ['1', '/'],
        ['2', '/self'],
        ['3', '/clubs'],
        ['4', '/games'],
        ['']
    ]);

    function navigate(pageID) {
        try {
            navigationController(pageDictionary.get(pageID))
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
            <div className='NavBar'>
                <h1 className='MainTitle'>
                    World Link Center
                </h1>
                <div className='ButtonGroup'>
                    <button className='NavigationButton' onClick={() => navigate('1')}>
                        To Home
                    </button>
                    <button className='NavigationButton' onClick={() => navigate('2')}>
                        To Profile
                    </button>
                    <button className='NavigationButton' onClick={() => navigate('3')}>
                        To Clubs
                    </button>
                </div>
            </div>
        </>
    );
}
*/ 



function NavigationBar() {
    return (
        <header>
            <div className="logo">VideoGames Club</div>
            <input type="checkbox" id="nav_check" hidden />
            <nav>
                <ul>
                    <li>
                        <a href="/" className="active">Home</a>
                    </li>
                    <li>
                        <a href="/">Perfil</a>
                    </li>
                    <li>
                        <a href="/">Clubes</a>
                    </li>
                    <li>
                        <a href="/">Juegos</a>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav_check" className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </header>
    );
}

export default NavigationBar



   