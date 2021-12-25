import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Navbar from '../components/Navbar'
import React from 'react'

//import CharactersScreen from '../pages/CharactersScreen'
//import MensScreeen from '../pages/MensScreeen'


//import SearchScreen from '../pages/SearchScreen'
//import WomensScreen from '../pages/WomensScreen'

const CharactersScreen = lazy(() => import('../pages/CharactersScreen'))
const MensScreeen = lazy(() => import('../pages/MensScreeen'))
const WomensScreen = lazy(() => import('../pages/WomensScreen'))
const SearchScreen = lazy(() => import('../pages/SearchScreen'))


const AppRouter = () => {
    return (
        <>
        <Navbar/>
        <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
        <Routes>
            <Route exact path="/mens" element={<MensScreeen/>}/>
            <Route exact path="/womens" element={<WomensScreen/>}/>
            <Route exact path="/search" element={<SearchScreen/>}/>
            <Route exact path="/character/:id" element={<CharactersScreen/>}/>
            <Route path="/" element={<Navigate to ="/mens" />}/>
            
        </Routes>
            </Suspense>
        </>
    )
}

export default AppRouter
