import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigator from './Navigator'
import Crousel from './Crousel'
import Subscribe from './Subscribe'
import FeaturedBlogs from './FeaturedBlogs'
import HeroBlogOne from './HeroBlogOne';
import HomeBlogs from './HomeBlogs';
import Footer from './Footer'


function Home() {
  return (
    <>
        <FeaturedBlogs/>
        <HeroBlogOne/>
        <HomeBlogs/>
        <Subscribe/>
    </>
  )
}

export default Home