
import React from 'react';
import { Card } from 'antd';
import conjunto from '../img/conjuntoA.jpeg';

const { Meta } = Card;

const Ropa = () => (
  <>
  <Card hoverable style={{ width: 240,}}
    cover={<img alt="example" src={conjunto} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card hoverable style={{ width: 240,}}
    cover={<img alt="example" src={conjunto} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </>
);
export default Ropa;