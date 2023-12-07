import React from 'react'
import { Link } from 'react-router-dom'
import AppleImg from "../../src/assets/images/app/01.jpg";
import StoreImg from "../../src/assets/images/app/02.jpg";

const btnText = 'Sign Up For Free'
const title = 'Shop Any Time , Anywhere'
const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae sint? Vero nobis voluptas velit distinctio optio sequi quia obcaecati?'

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to='/sign-up' className='lab-btn mb-4'>{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li><a href=""><img src={AppleImg} alt="" /></a></li>
                    <li><a href=""><img src={StoreImg} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default AppSection