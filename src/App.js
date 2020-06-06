import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import SignInHomepage from './pages/signin-homepage/signin-homepage.component';
import checkoutPage from './pages/check-out/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

class App extends React.Component{
 
  unsubscribedFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //action is settting up
          this.props.setCurrentUser({          
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
        
      }
      else
      {
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={checkoutPage}/>
          <Route exact path='/signin' 
          render={()=> 
            this.props.currentUser ? (
            <Redirect to='/'/>
            ):(
              <SignInHomepage />
            )}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

//this dispatch method invoke and tell redux about action
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
