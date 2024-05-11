import React from 'react'
import Navbar from '../NavBar/Navbar';
import Header from '../Header/Header';
import Mainbody from '../MainBody/Mainbody';
import Footer from '../Footer/Footer';
import ImageGallery from '../ImageGallery/ImageGallery';
export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Mainbody />
        <ImageGallery/>
        <Footer />
    </div>
  )
}
