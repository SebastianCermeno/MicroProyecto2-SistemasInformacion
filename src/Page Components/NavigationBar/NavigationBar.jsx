import { useNavigate } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {
    const navigationController = useNavigate()
    const pageDictionary = new Map([
        ['1', '/'],
        ['2', '/self'],
        ['3', '/clubs']
    ]);

    function navigate(pageID) {
        try {
            console.log("Success")
            navigationController(pageDictionary.get(pageID))
        } catch (error) {
            console.log("Failed")
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

export default NavigationBar