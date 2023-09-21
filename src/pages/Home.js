import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bearForest from '../img/bear-forest.webp';
import seaHouse from '../img/sea-house.jpg';
import pigFlower from '../img/pig-flower.jpeg';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  `;

const WelcomeContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  z-index: 1000; 

  h1 {
    font-size: 2rem; 

  }

`;

const CarouselContainer = styled.div`
  width: 80%;
  margin: 20px auto;

  .slick-slide {
    transition: transform .3s;
  }
`;

const Image = styled.img`
max-width: 50%;
height: auto;
display: block;
margin: 0 auto; 
`;

  


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  // 5 seconds
  };

  
  return (
    <div>
      <Container>
      <WelcomeContainer>
       <h1>¡BIENVENIDA A LA MADRIGUERA ARRAYAS!</h1> 
      </WelcomeContainer>
      <CarouselContainer>
        <Slider {...settings}>
          <div>
            <Image src={pigFlower}/>
          </div>
          <div>
            <Image src={bearForest} />
          </div>
          <div>
            <Image src={seaHouse}/>
          </div>
         
        </Slider>
      </CarouselContainer>

      </Container>
    </div>
  );
}

export default Home;
