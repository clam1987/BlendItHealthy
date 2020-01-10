import React from "react";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/HomeBanner.json";
import Image from "../../components/Image/Image"
import homeGallery from "../../assets/homeGallery.json";
import Wrapper from "../../components/Wrapper/Wrapper";
import ExtraImages from "../../components/ExtraImages/ExtraImages";
import HomePage from "../../assets/HomePage.json"


let Home = () => {
    const BottomImage = HomePage.map(botimg => {
        return <ExtraImages key={botimg.id} banners={require("../../assets/images/" + botimg.image)}/>
      })
      
      const Home = homeBanner.map(info => {
        return <Banner key={info.id} h1={info.h1} message={info.message} image={require("../../assets/images/" + info.image)} name={info.name} />
      })
      
      const Gallery = homeGallery.map(image => {
        return  <Image key={image.id} name={image.name} gallery={require("../../assets/images/" + image.gallery)} />
      })
      return (
          <>
          {Home}
          <Wrapper>
          {Gallery} 
          </Wrapper>
          {BottomImage}
          </>
      )
}

export default Home;