import React from 'react'
import './homeScreen.css'
import logo from '../../assets/logo-principal.png'
import logoFooter from '../../assets/logo-bottom.png'
export const HomeScreen = () => {
    return (
        <div className="w-full background flex col items-center vh100 justify-center">
            {/* <img className="w-full" src={background} alt="" /> */}
            <img src={logo} alt="" className="w-20" />
            <h1 className="title title-mobil"> Pr<span className="title-italic">ime</span>ra c<span className="title-italic">ole</span>cción en p<span className="title-italic">ro</span>
                ceso</h1>
            <span className="interfaces w-70"> <span className='title fs-21'>
                <span className='title-italic'>
                    G
                </span>
                racia
            </span>
                {' '} es una marca de lencería enfocada en incentivar el autocuidado y la autoestima de cada mujer, enseñando que todas pueden ser sensuales y capaces de descubrir esa esencia que las hace únicas</span>
            <img src={logoFooter} alt="" className="w-5 mt-5" />
        </div>
    )
}
