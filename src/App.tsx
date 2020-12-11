import React, {useEffect} from 'react'
import './App.css'
import {Header} from './components/Header'
import {LogIn} from './components/LogIn'
import {NavLink, Route} from 'react-router-dom'
import {Registration} from './components/Registration'
import {Recovery} from './components/Recovery'
import {NewPassword} from './components/NewPassword'
import {Profile} from './components/Profile'

export function App() {
    return (
        <div className="App">
            <h2>Dev</h2>
            <NavLink className='home_link' to='/'>HOME</NavLink>
            <Header/>

            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/login' render={() => <LogIn/>}/>
            <Route path='/registration' render={() => <Registration/>}/>
            <Route path='/recovery' render={() => <Recovery/>}/>
            <Route path='/password' render={() => <NewPassword/>}/>
        </div>
    )
}