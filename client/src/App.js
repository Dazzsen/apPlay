import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'


//RUTAS PROTEGIDAS
// import GameProtected from './components/routes/GameProtected'
import CrearProtegido from  './components/routes/CrearProtegido'

import NoticeList from './components/Notice-list'
import NavBar from './components/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import GameList from './components/GameList'
import Crear from './components/Crear'
import NoticeDetail from './components/Notice-detail';
import GameDetail from './components/gameDetails'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
    
  }

  setTheUser = user => {
    console.log(user)
    this.setState({ loggedInUser: user })
    //console.log("Un componente ha cambiado el usuario en App:", this.state.loggedInUser.data)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {


    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} role={this.state.loggedInUser.data.role}/>

          <Switch>
             <CrearProtegido path='/create' user={this.state.loggedInUser} component={Crear} />
             <Route path="/games" exact render={() => <GameList userInSession={this.state.loggedInUser} />} />
             <Route path="/notices" exact render={() => <NoticeList userInSession={this.state.loggedInUser} />} />
             {/* <Route path="/notices/:id" exact component={NoticeDetail} /> */}
             <Route path="/notices/:id" exact render={(match) => <NoticeDetail userInSession={this.state.loggedInUser} {...match}/>} />
             <Route path="/games/:id" exact render={(match) => <GameDetail userInSession={this.state.loggedInUser} {...match}/>} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            <CrearProtegido path='/create' user={this.state.loggedInUser} component={Crear} />
            <Route path="/games" exact render={() => <GameList userInSession={this.state.loggedInUser} />} />
            <Route path="/notices" exact render={() => <NoticeList userInSession={this.state.loggedInUser} />} />
            {/* <Route path="/notices/:id" exact component={NoticeDetail} /> */}
            <Route path="/notices/:id" exact render={(match) => <NoticeDetail userInSession={this.state.loggedInUser} {...match}/>} />
            <Route path="/games/:id" exact render={(match) => <GameDetail userInSession={this.state.loggedInUser} {...match}/>} />
            <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
            <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
          </Switch>
        </>
      )
    }
  }
}


export default App;
