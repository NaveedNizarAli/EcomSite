import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import Slider from '../../components/slider/slider.component'

const HomePage = () => (
    
    <div className='homepage'>
        <Slider/>
        <br></br>
        <br></br>
        <Directory />
    </div>
)

export default HomePage;