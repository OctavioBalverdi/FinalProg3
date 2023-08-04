import React from 'react';
import { Card } from 'antd';
import adidas from '../img/adidas.jpeg';



const { Meta } = Card;

const Zapatillas = () => (
  <Card hoverable style={{ padding:'5px',width: 240, borderRadius:'15px', border:'2px solid black'}}
 cover={<img alt="example" src={adidas} />}
  >
    <Meta title="Adidas SuperStart" description="www.instagram.com" />
  </Card>
  
);
export default Zapatillas;