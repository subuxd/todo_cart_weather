import React from 'react';
import vg from "../assets/2.png";
import { AiFillFacebook, AiFillAmazonCircle, AiFillApple, AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Home = () => {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '20px'
      };

    const handle1OpenUrl = () => {
        window.open('https://1todoapp.netlify.app/', '_blank');
      };
    const handle2OpenUrl = () => {
        window.open('https://gadget-kart.netlify.app/', '_blank');
      };
    const handle3OpenUrl = () => {
        window.open('https://mausam1.netlify.app/', '_blank');
      };
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>ShopEase.</h1>
                    <p>Stay organized effortlessly and shop smarter with our all-in-one Todo and Shopping Cart app.</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                    ShopEase is your all-in-one solution for seamless task management and shopping convenience. With intuitive task lists and a user-friendly shopping cart, ShopEase transforms your daily routine into a well-organized, stress-free experience. Whether it's planning your day or stocking your pantry, ShopEase is your trusted companion for productivity and convenience. Say goodbye to scattered notes and hello to a more organized life with ShopEase, where productivity meets shopping. Simplify your life today!
                    </p>
                </div>
            </div>

            <div className="home3" id='todo'>
                <div>
                    <h1>Todo App</h1>
                    <button style={buttonStyle} onClick={handle1OpenUrl}>Try it</button>
                    
                </div>
            </div>
            

            <div className="home4" id='cart'>
                <div>
                    <h1>Shopping Cart</h1>
                    <button style={buttonStyle} onClick={handle2OpenUrl}>Try it</button>

                    
                </div>
            </div>

            <div className="home3" id='weather'>
                <div>
                    <h1>Check Weather</h1>
                    <button style={buttonStyle} onClick={handle3OpenUrl}>Try it</button>
                    
                </div>
            </div>
        </>
    )
}

export default Home