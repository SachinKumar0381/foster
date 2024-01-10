import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

export default function Itemcard({itm}) {
    const navig = useNavigate();
    const {handleSet} = useContext(ProductContext)
  const theme = useTheme();
  const handlenavig = ()=>{
    handleSet(itm)
    navig("/item")
  }

  return (
    <div style={{marginBottom:"5vh"}}>
    <Card sx={{ display: 'flex' }} onClick={handlenavig}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={itm.images[0].url}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {itm.restaurant_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {itm.restaurant_mode}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009
          </Typography>
          <p style={{color:"goldenrod",fontWeight:"bold",fontSize:"large"}}>4 Offers trending</p>
        </CardContent>
        <Box sx={{ display: 'flex',justifyContent:"space-around",textAlign:"center", alignItems: 'center', pl: 1, pb: 1 }}>
          <div>
            <p style={{marginBottom:"-10px"}}><StarIcon/>{itm.rating.restaurant_avg_rating}</p>
            <p>popularity</p>
          </div>
          <div>
            <p style={{marginBottom:"-10px"}}><CurrencyRupeeIcon/>{itm.avg_cost_for_two}</p>
            <p>cost for two</p>
          </div>
        </Box>
      </Box>
    </Card>
    </div>
  );
}