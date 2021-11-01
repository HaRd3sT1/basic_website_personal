
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./Styles.module.scss"
import Image from "../../assets/img/img.png"
import classNames from 'classnames';
import { ButtonCustom } from '../../components/Items/buttons';
const Slider = (props) => {
    const { id } = useParams();
    const [hover, setHover] = useState({x:0,y:0})
    // const { coins } = useSelector(
    //     (state) => ({
    //         coins: state.generalDataReducer.coins,
    //     }), shallowEqual
    // );
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [dispatch, id]);
    // const handleMouseEnter = (e) => {
    //     console.log('onMouseEnter', e.clientX, e.clientY)
    //   }
      const handleMouseMove = (e) =>{
        // console.log(
        //   'onMouseMove',
        //   (e.nativeEvent.clientX / 50), (e.nativeEvent.clientY / 50)
        // )
        setHover({x:e.nativeEvent.clientY / 50,y:e.nativeEvent.clientX / 50})
      }
    //   const handleMouseLeave = (e) => {
    //     console.log('onMouseLeave', e.clientY, e.clientX)
    //   }
      
    return (
        <div className={classNames(styles.slider)}
                                            
        // onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseLeave}
        >
            <div>
                <div className={styles.circle}
                    style={{transform: "perspective(2000px) rotateX("+(hover.x - 10)+"deg) rotateY("+(hover.y - 20)+"deg)"}}
                >
                    <div className={styles.bg}></div>
                    <div className={styles.line}></div>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.textStyle}>
                    <h1>Technology Startup Vision</h1>
                </span>
                <p>We are a boutique digital transformation consultancy and software development company. We are Technum.</p>
                <ButtonCustom text="START FREE TRAIAL" style={{backgroundColor:"#ea7561", fontWeight:"500", color:"#fff", borderRadius:5, height:56, width:220}} />
            </div>
        </div>
    )
}

export default Slider;
