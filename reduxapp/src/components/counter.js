import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
/* import {bindActionCreators} from 'redux';*/
import './counter.css';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div>
            <div className="number_block">{counter}</div>
            <div className="btn_block">
                <div onClick={inc} className="btn_item"></div>
                <div onClick={dec} className="btn_item"></div>
                <div onClick={res} className="btn_item"></div>
            </div>
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
} */

export default connect(mapStateToProps, actions)(Counter);
