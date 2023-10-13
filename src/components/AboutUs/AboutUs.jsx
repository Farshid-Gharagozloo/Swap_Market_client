import image_1 from "../../assets/image/shopping.svg";
import image_2 from "../../assets/image/swap.jpg";
import image_3 from "../../assets/image/message.png";
import image_4 from "../../assets/image/like_minded.webp";
import React, { useEffect, useState, useRef } from 'react';
import './AboutUs.scss';


export default function AboutUs (){

    const allCards = [
        {imageUrl: image_1 , text: "Effortlessly Discover Your Desired Products – No Account Required!" },
        {imageUrl: image_2 , text: "Unlock the Power of Your Account: Share, Sell, or Swap with Ease!" },
        {imageUrl: image_3 , text: "Seamless Communication: Connect Directly with Sellers via Messaging!" },
        {imageUrl: image_4 , text: "Join Our Community: Connect and Engage with Like-Minded Individuals!" }
    ];

    const [firstImage, setFirstImage] = useState(0);
    const [secondImage, setSecondImage] = useState(1);
    const [thirdImage, setThirdImage] = useState(2);
    const intervalRef = useRef(0);


    const changeCard = () => {
        setFirstImage((prevCard) => (prevCard + 1) % allCards.length);
        setSecondImage((prevCard) => (prevCard + 1) % allCards.length);
        setThirdImage((prevCard) => (prevCard + 1) % allCards.length);
    };

    const startAutoChange = () => {
        intervalRef.current = window.setInterval(changeCard, 5750);
    };

    const stopAutoChange = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoChange();

        return () => {
            stopAutoChange();
        };
    }, []);

    const handleClick = () => {
        changeCard();
        stopAutoChange();
        startAutoChange();
    }

    return (
        <>
        <div className="about__hero">
            <h2 className="about__title">Swap Market Site: Revolutionizing the Way You Exchange</h2>
        </div>
        <section className="about__cards">
            {allCards.map((card, index) => (
                <div className="about__allcards" key={index} onClick={handleClick}>
                    <section className={
                            index === firstImage
                                ? "about__firstcard"
                                : index === secondImage
                                    ? "about__secondcard"
                                    : index === thirdImage
                                        ? "about__thirdcard"
                                        : "about__lastcard"
                        }>
                        <p className={ "about__text"}>
                            {card.text}
                        </p>
                        <img src={card.imageUrl} alt='promotion_image' className={ "about__image"}/>
                    </section>
                </div>
            ))}
        </section>
        <div className="about__block">
            <h3 className="about__motto">
                This platform is an innovative space where individuals can connect to buy,
                 sell, or trade their beloved second-hand items.
            </h3>
            <p className="about__description">
                Upon signing up, users gain access to a user-friendly messaging system, 
                enabling seamless communication between buyers and sellers. 
                The site's responsive design ensures a seamless browsing experience across mobile, 
                tablet, and desktop devices, making it convenient for users to access the platform anytime, anywhere.
            </p>
            <button className="about__button">
                Create Account
            </button>
            <p className="about__description">
                For those seeking affordable options or unique finds, accessing them easily can be a challenge. 
                This site has the solution! It addresses these issues by promoting the exchange and sale of second-hand items, 
                offering affordable alternatives, and providing a convenient platform for decluttering, 
                all to help you create a more organized living environment.
            </p>
            <button className="about__button">
                Explore List Of Items
            </button>
        </div>


        </>
    );
}