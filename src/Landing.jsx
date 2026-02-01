import valorSplash from './assets/beardy\'s_valor.png'
import './Landing.css'

function Landing({onEnter}) {

  return (
    <>
      <div>
          <img src={valorSplash} className="splash" alt="Beadry's Valor Splash"/>
      </div>
      <div className="card">
        <button onClick={onEnter}>
          Enter Site
        </button>
      </div>
    </>
  )
}

export default Landing
