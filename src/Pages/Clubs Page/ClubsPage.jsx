import {getDoc, doc} from 'firebase/firestore'

function ClubsPage({firestore}){
    const club = doc(firestore,'Clubes/Club de Estrategia')
    async function readDoc() {
        const snapshot = await getDoc(club)
        if (snapshot.exists()) {
            alert('yippee')
        }
        else {
            alert('not yippee')
        }
    }
    return(
        <button onClick={() => readDoc()}>
            pause
        </button>
    )
}

export default ClubsPage