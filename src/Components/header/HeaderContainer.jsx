import React from "react";
import { connect } from "react-redux";
import Preloader from "../../preloader/Preloader";
import Header from "./Header";
import {logout} from '../../redux/authReducer';






class HeaderContainerAPI extends React.Component {

            
    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Header {...this.props} /> 
        </>
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
const HeaderContainer = connect (mapStateToProps,{logout})(HeaderContainerAPI)

export default HeaderContainer;