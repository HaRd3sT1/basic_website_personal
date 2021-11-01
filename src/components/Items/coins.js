import React from 'react';
import { onChange } from '../../state/actions/form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Coins.module.scss';
import {setCoin} from "../../state/actions/general"
import PayError from "../../assets/img/pay_error.png"
import {ButtonBlue} from "./buttons";
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import CloseIcon from "../../assets/img/icons/close.svg"
import { useHistory } from "react-router-dom";
import {defaultMail} from "../../Settings"

const Gender = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { form, general, setCoinVal } = useSelector(
        (state) => ({
            form: state.form,
            general: state.generalDataReducer.general,
            setCoinVal: state.generalDataReducer.setCoin,
        }), shallowEqual
    );
    if(!setCoinVal && !form.paymentError){
        return null
    }

    return(<div {...props}>    
       <div className={classNames(styles.coin, form.paymentError ? styles.paymentError : "")} onClick={(e) => dispatch(setCoin(0))}>      
       <img src={CloseIcon} alt="" className={styles.close} style={{width:24, height:24}}  />
        {/* <CloseIcon className={styles.close} style={{width:24, height:24}} fill={"#eb4f42"} /> */}
        
                    
            {form.paymentError ? <div className={styles.payError}>
                {/* <b>Glückwunsch</b> */}
                <img src={PayError} alt="" />
                <b>Zahlung abgebrochen</b>
                <p><FormattedMessage id="General.odemeBasarisiz" /> {defaultMail}</p>
                <ButtonBlue onClick={(e) => {dispatch(onChange("paymentError", "")); history.push("/premium")}} style={{ borderRadius:3, height: 46, width: 180, marginLeft:0, textTransform:"capitalize",flex: "none", marginBottom:0, marginTop:10 }} text={"Erneut versuchen"} />
            </div> :
            <div className={styles.bottomBadge}>
                {Number(setCoinVal) ? <div style={{display:"flex", flexDirection:"column"}}>
                    {Number(setCoinVal) > 30 ? <b><FormattedMessage id="General.tebrikler" /></b> : <b><FormattedMessage id="General.tebrikler" /></b>}
                    {Number(setCoinVal) > 30 ? <span><FormattedMessage id="General.iyiEglenceler" /></span> : <span><FormattedMessage id="General.bedavaCoinKazandin" /></span> }
                </div> : <div style={{display:"flex", flexDirection:"column"}}>
                    <b><FormattedMessage id="General.tebrikler" /></b>
                    <span><FormattedMessage id="General.VipIyiEglenceler" /></span>
                </div>}
            </div>  }
            {/* <div className={styles.img}>
                <img src={sadGif} alt="" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>:    */}
            {!form.paymentError ?        
            <div className={styles.front} id="coinJump">                                
                <div className={styles.star}></div>                                
                <span className={styles.creditsAmount}>{setCoinVal}</span>                                
                <div className={styles.shapes}>                                  
                    <div className={styles.shape_l}></div>                                  
                    <div className={styles.shape_r}></div>                                  
                    <span className={styles.top}>C</span>                                  
                    <span className={styles.bottom}>{general.title}</span>                                
                </div>                              
            </div> : ""}                                                        
        </div>
        <div className={styles.coinBg} onClick={(e) => {dispatch(setCoin(0)); dispatch(onChange("paymentError", ""))}}>

        </div>
    </div> )
}
export default Gender;