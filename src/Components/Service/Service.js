import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({data}) => {
    const {id, name, price, img, description} = data;
    const navigate = useNavigate();
    const navigateTo = id =>{
      navigate('/service/$(id)');

    }
    return (
        <div className='service'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <h3>Price: {price} </h3>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button onClick={()=>navigateTo(id)} variant="primary">Take This Service</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;