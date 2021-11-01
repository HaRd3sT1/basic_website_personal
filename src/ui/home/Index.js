
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./Styles.module.scss"
import Logo from "../../assets/img/logo.png"
import Img1 from "../../assets/img/img-1.png"
import Img2 from "../../assets/img/img-2.png"
import Img3 from "../../assets/img/img-3.png"
import Logo5 from "../../assets/img/logo-5.png"
import { NavLink } from 'react-router-dom';
import { ButtonCustom } from '../../components/Items/buttons';
import {HiViewGridAdd} from "react-icons/hi"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTimes} from "react-icons/fa"
import {BsFillPinMapFill} from "react-icons/bs"
import {MdPhoneInTalk} from "react-icons/md"
import {GrMail} from "react-icons/gr"
import classNames from 'classnames';
import Slider from './Slider';
const Profile = (props) => {
    const { id } = useParams();
    // const { coins } = useSelector(
    //     (state) => ({
    //         coins: state.generalDataReducer.coins,
    //     }), shallowEqual
    // );
    const dispatch = useDispatch();
    const [sidebar, setSidebar] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [dispatch, id]);
    // const handleMouseEnter = (e) => {
    //     console.log('onMouseEnter', e.clientX, e.clientY)
    //   }
    //   const handleMouseLeave = (e) => {
    //     console.log('onMouseLeave', e.clientY, e.clientX)
    //   }
      
    return (
        <section className={styles.home}>
            <div className={styles.firstContainer}
                >
                <div className={styles.sidebar}>
                    <HiViewGridAdd style={{cursor:"pointer"}} size={40} color="#787E80" onClick={(e) => setSidebar(!sidebar) } />
                    <ul>
                        <li>
                            <a href="#">
                                <FaFacebookF size={18} color="#787E80" />
                            </a>
                        </li>
                        <li>
                        <a href="#">
                            <FaTwitter size={18} color="#787E80" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <FaLinkedinIn size={18} color="#787E80" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <FaInstagram size={18} color="#787E80" />
                        </a>
                        </li>
                    </ul>
                </div>
                <header>
                    <NavLink to="/" className={styles.logo}>
                        <img src={Logo} alt="" />
                        Bilişim
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName={styles.active}>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/1" activeClassName={styles.active}>
                            PAGES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/2" activeClassName={styles.active}>
                            PORTFOLIO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/3" activeClassName={styles.active}>
                            BLOG
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/4" activeClassName={styles.active}>
                            SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/5" activeClassName={styles.active}>
                            CONTACTS
                            </NavLink>
                        </li>
                    </ul>
                    <ButtonCustom text="START FREE TRAIAL" style={{backgroundColor:"#46cda3", fontWeight:"500", color:"#fff", borderRadius:5, height:56, width:220}} />
                </header>
                <Slider />
            </div>
            <div className={styles.logos}>
                <div className={classNames("container", styles.container)}>
                    <h3>TechnUm VIP Partners Trusted by</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Logo5} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo5} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo5} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo5} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo5} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.spaces}></div>
            <div className="container">
                <div className={styles.headerRow}>
                    <div className={styles.left}>
                        <span className={styles.textStyle2}>
                            <h2>Digital Studio Design & Development Services</h2>
                        </span>
                    </div>
                    <div className={styles.right}>
                        Brotula California flyingfish bonytail chub redmouth whalefish cookie-cutter shark whitebait zander basking shark! Asiatic glassfish coolie loach sprat pelican gulper, archerfish loosejaw, Blind goby. Southern grayling grunter, orange roughy tench
                    </div>

                </div>
                <div className={styles.boxs1}>
                    <div className={styles.item}>
                        <img src={Img1} alt="" />
                        <b>Development Board</b>
                        <p>Brotula California flyingfish bonytail chub redmouth whalefish cookie-cutter shark whitebait zander basking shark! Asiatic</p>
                    </div>
                    <div className={styles.item}>
                        <img src={Img1} alt="" />
                        <b>Development Board</b>
                        <p>Brotula California flyingfish bonytail chub redmouth whalefish cookie-cutter shark whitebait zander basking shark! Asiatic</p>
                    </div>
                    <div className={styles.item}>
                        <img src={Img1} alt="" />
                        <b>Development Board</b>
                        <p>Brotula California flyingfish bonytail chub redmouth whalefish cookie-cutter shark whitebait zander basking shark! Asiatic</p>
                    </div>
                </div>
            </div>
            <div className={styles.spaces}></div>
            <div className={styles.footer}>
                <div className={classNames(styles.container, "container")}>
                    <div className={styles.box}>
                        <div className={styles.logo}>
                        <img src={Logo} alt="" />
                        Bilişim
                        </div>

                        <ul className={styles.social}>
                            <li>
                                <a href="#">
                                    <FaFacebookF size={14} color="#fff" />
                                </a>
                            </li>
                            <li>
                            <a href="#">
                                <FaTwitter size={14} color="#fff" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <FaLinkedinIn size={14} color="#fff" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <FaInstagram size={14} color="#fff" />
                            </a>
                            </li>
                        </ul>
                        <small>Copyright © 2022 AS Bilisim. All Rights Reserved.</small>
                    </div>
                    <div className={styles.box}>
                        <b>HİZMETLER</b>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Hizmet 1
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.box}>
                        <b>ADRES</b>
                        <p>7140 Wehner Tunnel Washington, D.C</p>
                    </div>
                    <div className={styles.box}>
                        <b>PHONE</b>
                        <p>+1 800 356789142</p>
                    </div>


                </div>
            </div>
            <div className={classNames(sidebar ? styles.active : "", styles.sidebarFixed)}>
                <div className={styles.close} onClick={(e) => setSidebar(false)}>
                    <FaTimes color="#fff" size={30} />
                </div>
                <ul className={styles.list}>
                    <li>
                        <BsFillPinMapFill size={28} color={"#4fdbb0"} />
                        <div>
                            <p>VISIT US:</p>
                            <p>58 White St, New York</p>
                        </div>
                    </li>
                    <li>
                        <GrMail size={28} color={"#4fdbb0"} />
                        <div>
                            <p>MAIL US DAILY:</p>
                            <p>utech.company@mail.com</p>
                        </div>
                    </li>
                    <li>
                        <MdPhoneInTalk size={28} color={"#4fdbb0"} />
                        <div>
                            <p>CALL US 24/7:</p>
                            <p>+ 1800 - 123 456 78</p>
                        </div>
                    </li>
                </ul>
                <ul className={styles.social}>
                    <li>
                        <a href="#">
                            <FaFacebookF size={14} color="#fff" />
                        </a>
                    </li>
                    <li>
                    <a href="#">
                        <FaTwitter size={14} color="#fff" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <FaLinkedinIn size={14} color="#fff" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <FaInstagram size={14} color="#fff" />
                    </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Profile;
