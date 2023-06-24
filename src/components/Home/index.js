import LogoTitle from '../../assets/images/e.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const {letterClass, setLetterClass} = useState('text-animate')
    const nameArray = ['v', 'a', 'n',' ', 'C','l','e','v','e','n','g','e','r']
    const jobArray=['W','e','b',' ', 'D','e','v','e','l','o','p','e','r']

    return(
        <div className=" container home-page"> 
         <div className="text-zone">
                <h1>
                <span class Name={letterClass}>H</span>
                <span class Name={`${letterClass} _12`}>i</span>
                <br /> 
                <span class Name={`${letterClass} _13`}>I</span>
                <span class Name={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer" />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>

                <br />

                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>

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