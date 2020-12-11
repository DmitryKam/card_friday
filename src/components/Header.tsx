import React from 'react'
import {NavItem} from './NavItem'

export const Header = () => {
    return (
        <ul>
            <NavItem title='PROFILE' to='profile'/>
            <NavItem title='LOG IN' to='login'/>
            <NavItem title='REGISTRATION' to='registration'/>
            <NavItem title='RECOVERY' to='recovery'/>
            <NavItem title='NEW PASSWORD' to='password'/>
            <div><NavItem title='LOG OUT' to='login'/></div>
        </ul>
    )
}