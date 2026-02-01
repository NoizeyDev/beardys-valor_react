import Landing from './Landing.jsx'
import MainPage from './MainPage.jsx'
import {useState} from 'react'

function App() {
    const [entered, setEntered] = useState(false)

    return ( entered
            ? <MainPage />
            : <Landing onEnter={() =>setEntered(true)} />
    )
}

export default App