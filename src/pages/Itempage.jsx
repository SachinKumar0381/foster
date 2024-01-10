import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { CardContent, CardMedia, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Itempage = () => {
  const {item} = useContext(ProductContext);
   
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - e.target.getBoundingClientRect().left,
      y: touch.clientY - e.target.getBoundingClientRect().top,
    });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();

    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - e.target.getBoundingClientRect().left,
      y: touch.clientY - e.target.getBoundingClientRect().top,
    });
  };

  return (
    <div style={{padding:"5%"}}>
      <div>
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image={item.images[0].url}
        alt="Live from space album cover"
        style={{ position: 'relative' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
      />
      <img
        src="https://media.licdn.com/dms/image/D4D0BAQFtXdYnaPFoIg/company-logo_200_200/0/1694167785068/fastor_in_logo?e=1712793600&v=beta&t=UyA5OM59geWjhlQBC_I23AcBxWZzA8zeaFf5m0dL2S0"
        alt="Draggable Image"
        style={{
          width:"20%",
          position: 'absolute',
          top: position.y,
          left: position.x,
          cursor: 'grab',
          userSelect: 'none',
        }}
        draggable="true"
        onDragStart={handleDragStart}
      />
      </div>
      <div>
        <div style={{display:"flex"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.restaurant_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.restaurant_mode}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          B-6/2, Model Town 1
          </Typography>
          <p style={{color:"goldenrod",fontWeight:"bold",fontSize:"large"}}>4 Offers trending</p>
        </CardContent>
        <div>
            <p style={{marginBottom:"-10px"}}><StarIcon/>{item.rating.restaurant_avg_rating}</p>
            <p>popularity</p>
          </div>
        </div>
        
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ratione harum itaque dolorem laboriosam iusto ducimus quae sed nostrum ab et dolore, dolores quis, libero nisi corrupti nobis fuga dolor.</p>
    </div>
  )
}

export default Itempage