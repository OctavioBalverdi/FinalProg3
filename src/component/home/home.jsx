import React from 'react';
import { Carousel } from 'antd';
import carrusel1 from '../img/carrusel1.jpg';
import carrusel2 from '../img/carrusel2.jpg';
import carrusel3 from '../img/carrusel3.jpg';
import carrusel4 from '../img/carrusel4.jpg';
import carrusel5 from '../img/carrusel5.jpg';



const contentStyle = {
  height: '600px',
  lineHeight: '300px',
  textAlign: 'center',
  background: 'black',
  maxWidth: '80%',
  maxHeight: '80%'
};


const Home = () => (
  <Carousel autoplay>
  <div>
    <h3 style={contentStyle}><img src={carrusel1} alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src={carrusel2} alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src={carrusel3} alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src={carrusel4} alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src={carrusel5} alt="" /></h3>
  </div>
</Carousel>
);
export default Home;