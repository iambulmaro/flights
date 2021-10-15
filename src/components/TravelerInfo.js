import React from 'react'
import TravelerInfoForm from './TravelerInfoForm'
import Roundtrip from './Roundtrip';
import '../styles/TravelerInfo.css'

const TravelerInfo = () => {
    return (
        <div className='travelerInfo' >
            <TravelerInfoForm />
            <Roundtrip dynamicLink='/payment' />
        </div>
    )
}

export default TravelerInfo
