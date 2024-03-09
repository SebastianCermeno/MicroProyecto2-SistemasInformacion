import './NavigationBar.css'

function NavigationBar() {
    return(
        <>
            <div className='NavBar'>
                <h1 className='MainTitle'>
                    World Link Center
                </h1>
                <div className='ButtonGroup'>
                    <button className='NavigationButton'>
                        To Home
                    </button>
                    <button className='NavigationButton'>
                        To Profile
                    </button>
                    <button className='NavigationButton'>
                        To Clubs
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavigationBar