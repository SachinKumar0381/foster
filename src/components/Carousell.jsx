import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Carousell = () => {
    const onChange = (index) => {
        // console.log(`Carousel slide changed to index ${index}`);
      };
    
      const onClickItem = (index) => {
        // console.log(`Clicked on item with index ${index}`);
      };
    
      const onClickThumb = (index) => {
        // console.log(`Clicked on thumbnail with index ${index}`);
      };
  return (
    <div className='carouseldiv'>
         <Carousel className='dob' infiniteLoop={true} autoPlay={true} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      <div>
        <img src="https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/478348860/photo/chocolate-cake-with-chocolate-fudge-drizzled-icing-and-chocolate-curls.jpg?b=1&s=612x612&w=0&k=20&c=fW3zC1L7YFp7ZqowxaeKyxcOd9bo9bhzX-0tBthYIcg=" alt="Slide 2" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1339241159/photo/set-of-different-delicious-cakes-isolated-on-white.jpg?s=612x612&w=0&k=20&c=i_OmAnqVaTFODI2f7DlCj45gKTSg01RfRrLY8_FC6E4=" alt="Slide 3" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/478348860/photo/chocolate-cake-with-chocolate-fudge-drizzled-icing-and-chocolate-curls.jpg?b=1&s=612x612&w=0&k=20&c=fW3zC1L7YFp7ZqowxaeKyxcOd9bo9bhzX-0tBthYIcg=" alt="Slide 4" />
      </div>
    </Carousel>
    </div>
  )
}

export default Carousell