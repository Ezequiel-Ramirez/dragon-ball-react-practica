import { Navigate, Route, Routes } from 'react-router-dom'

import CharactersScreen from '../pages/CharactersScreen'
import MensScreeen from '../pages/MensScreeen'
import Navbar from '../components/Navbar'
import React from 'react'
import SearchScreen from '../pages/SearchScreen'
import WomensScreen from '../pages/WomensScreen'

const AppRouter = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/mens" element={<MensScreeen/>}/>
            <Route exact path="/womens" element={<WomensScreen/>}/>
            <Route exact path="/search" element={<SearchScreen/>}/>
            <Route exact path="/character/:id" element={<CharactersScreen/>}/>
            <Route path="/" element={<Navigate to ="/mens" />}/>
            
        </Routes>
            
        </>
    )
}

export default AppRouter
