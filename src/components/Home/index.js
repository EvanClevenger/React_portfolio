import LogoTitle from '../../assets/images/e.png'
import { Link } from 'react-router-dom'
import './index.scss'



const Home = () => {

    return(
        <div className=" container home-page"> 
         <div className="text-zone">
                <h1> Hi, <br /> 
                I'm   
                <img src={LogoTitle} alt="developer" />
                van Clevenger
                <br />
                Wed Developer
                </h1>
                <h2>
                    Frontend Developer
                </h2>
                <Link to='/contact' className='flat-button'>GET IN TOUCH </Link>

            </div>
            
        </div>
    )
}

export default Home