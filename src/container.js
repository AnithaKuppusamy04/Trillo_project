import React from 'react';
import Header from './header';
import Logo from "./imges/logo.png";
import Searchicon from "./imges/magnifying-glass.png";
import Bookmark from "./imges/bookmark.png";
import Chat from "./imges/chat.png";
import Profile from "./imges/user.png";
import Homeicon from "./imges/home.png";
import Flighticon from "./imges/aircraft-take-off.png";
import Keyicon from "./imges/key.png";
import Mapicon from "./imges/map.png";
import Hotel1 from "./imges/hotel1.png";
import Hotel2 from "./imges/hotel2.png";
import Hotel3 from "./imges/hotel3.png";
import Stars from "./imges/star.png";
import Location from "./imges/location-pin.png";
import User1 from "./imges/users1.jpg";
import User2 from "./imges/users2.jpg";
import User3 from "./imges/users3.jpg";
import User4 from "./imges/users4.jpg";




const Container = () => {
    return (
        
            <div className='container'>
                <div className='box'>
                <header className='header'>
                    <img src={Logo} alt="website logo" className='logo'/>
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder='search hotels'/>
                        <button className="search__button">
                            <img src={Searchicon} alt="search icon" className="search__icon"/>
                        </button>
                    </form>
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <img src={Bookmark} alt="bookmark icon" className="user-nav__icon" />
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__icon-box">
                            <img src={Chat} alt="chat icon" className="user-nav__icon" />
                            <span className="user-nav__notification">10</span>
                        </div>
                        <div className="user-nav__user">
                            <img src={Profile} alt="user profile photo" className="user-nav__user-photo" />
                            <span className="user-nav__user-name">Anitha</span>
                        </div>
                    </nav>  
                </header>




                <div className='content'>
                    <nav className='sidebar'>
                        <ul className="side-nav">
                            <li className="side-nav__item side-nav__item--active">
                                <a href="#" className="side-nav__link">
                                    <img src={Homeicon} alt="Home icon" className='side-nav__icon'/>
                                    <span>Hotel</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <img src={Flighticon} alt="Flight icon" className='side-nav__icon'/>
                                    <span>Flight</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <img src={Keyicon} alt="Home icon" className='side-nav__icon'/>
                                    <span>Car rental</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <img src={Mapicon} alt="Home icon" className='side-nav__icon'/>
                                    <span>Tours</span>
                                </a>
                            </li>
                        </ul>

                        <div className="legal">
                            &copy:2017 by A. All rights reserved.
                        </div>
                    </nav>
                    <main className='hotel-view'>
                        <div className="gallery">
                            <figure className="gallery__item">
                                <img src={Hotel1} alt="hotel view pic" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={Hotel2} alt="hotel view pic" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={Hotel3} alt="hotel view pic" className="gallery__photo" />
                            </figure>
                        </div>
                        <div className="overview">
                            <h1 className="overview__heading">
                                Hotel Las Palmas
                            </h1>
                            <div className="overview__stars">
                                <img src={Stars} alt="stars for rating" className="overview__icon-star" />
                                <img src={Stars} alt="stars for rating" className="overview__icon-star" />
                                <img src={Stars} alt="stars for rating" className="overview__icon-star" />
                                <img src={Stars} alt="stars for rating" className="overview__icon-star" />
                                <img src={Stars} alt="stars for rating" className="overview__icon-star" />
                            </div>

                            <div className="overview__location">
                                <img src={Location} alt="stars for rating" className="overview__icon-location" />
                                <button className="btn-inline">Havelock, Andaman</button>
                            </div>
                            <div className="overview__rating">
                                <div className="overview__rating-average">9.5
                                </div>
                                <div className="overview__rating-count">1029 ratings</div>

                            </div>
                        </div>
                        <div className="detail">
                            <div className="description">
                                <p className="paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                </p>
                                <p className="paragraph">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <ul className="list">
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    <li className="list__item">airport shuttle</li>
                                    
                                </ul>
                                <div className="recommand">
                                    <p className="recommand__count">
                                        Krish & other 3 friends recommands this property
                                    </p>
                                    <div className="recommand__friends">
                                    <img src={User1} alt="User pic" className="recommand__photo" />
                                        <img src={User2} alt="User pic" className="recommand__photo" />
                                        <img src={User3} alt="User pic" className="recommand__photo" />
                                        <img src={User4} alt="User pic" className="recommand__photo" />
                                    </div>
                                </div>
                            </div>
                            <div className="user-reviews">
                                <figure className="review">
                                    <blockquote className="review__text">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                                    </blockquote>
                                    <figcaption className="review__user">
                                    <img src={User1} alt="User pic" className="review__photo" />
                                    <div className="review__user-box">
                                            <p className="review__user-name">
                                                nick smith
                                            </p>
                                            <p className="review__user-date">
                                                feb 23rd, 2023
                                            </p>
                                    </div>
                                    <div className="review__rating">7.9</div>
                                    </figcaption>
                                </figure>

                                <figure className="review">
                                    <blockquote className="review__text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                    </blockquote>
                                    <figcaption className="review__user">
                                    <img src={User2} alt="User pic" className="review__photo" />
                                    <div className="review__user-box">
                                            <p className="review__user-name">
                                                james karol
                                            </p>
                                            <p className="review__user-date">
                                                nov 14th, 2023
                                            </p>
                                    </div>
                                    <div className="review__rating">8.8</div>
                                    </figcaption>
                                </figure>
                                <button className="btn-inline">
                                    Show all <span> &rarr </span>
                                </button>
                            </div>
                            
                        </div>
                        <div className="cta">
                                <h2 className="cta__book-now">
                                    good news we have 4 rooms left for your selected dates!
                                </h2>
                                <button className="btn">
                                    <span className="btn__visible">Book now!</span>
                                    <span className="btn__invisible">only 4 rooms left</span>
                                    
                                </button>
                            </div>
                    </main>
                </div>
                </div>
            </div>
    );
};

export default Container;