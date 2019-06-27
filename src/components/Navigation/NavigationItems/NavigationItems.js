import React from 'react'

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems=()=>(
    <div className='NavigationItems'>
    <NavigationItem link="/" exact>SignIn</NavigationItem>
    <NavigationItem link="/SignUp" >SignUp</NavigationItem>
    <NavigationItem link="/BarChart" >BarChart</NavigationItem>
    <NavigationItem link="/reactd3" >reactd3</NavigationItem>
    </div>
)
export default navigationItems;