import './App.css';
import NavBar from './Components/navbar/NavBar.jsx';
import React from 'react';
import { Route, Routes, } from 'react-router-dom';
// import DialogsContainer from './Components/dialogs/DialogsContainer';
import UsersContainer from './Components/users/UsersContainer';
import ProfileContainerAPI from './Components/profile/ProfileContainer';
import HeaderContainer from './Components/header/HeaderContainer';
import Login from './Components/Login/Login';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import { connect, Provider } from 'react-redux';
import Preloader from './preloader/Preloader';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Suspence } from './HOC/withSuspenceComponent';


const DialogsContainer = React.lazy(() => import('./Components/dialogs/DialogsContainer'))


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return(
        <div role={'main'}>
          <Preloader />
        </div>
      ) 
    } else return (
      <div role={'main'} className="wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="changeLand">
          <Routes>
            <Route path="/dialogs/*" element={Suspence(DialogsContainer)} />
            <Route path='/profile/*' element={<ProfileContainerAPI />} />
            <Route path="/profile/:userId" element={<ProfileContainerAPI />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  };
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
const AppContainer = compose(
  connect(mapStateToProps, { initializeApp })(App),
);
const SocialNetwork = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetwork;