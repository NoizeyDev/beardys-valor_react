import valorSplash from './assets/beardy\'s_valor.png'
import './Landing.css'

function MainPage() {

    return (
        <>
            <div>
                <img src={valorSplash} className="splash" alt="Beadry's Valor Splash"/>
            </div>
            <div className="card">
                <button >
                    Main Page
                </button>
            </div>
        </>
    )
}

export default MainPage
