import '../assets/styles/HomePage.css'
import { Calculator, Loader, notify } from '../components'
import { useState, useEffect } from 'react'

const HomePage = () => {
    const [ loader, setLoader ] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoader(false), 1000)
        setTimeout(() => notify.success('Welcome to calculator!'), 1000)
    }, [])

    return loader ? <Loader/> : <div className="homepage-container">
        <Calculator className="calculatorHp"/>
    </div>    
}

export default HomePage