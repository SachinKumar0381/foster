import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareImage = () => {
  const shareUrl = 'http://localhost:3000/dashboard'; // Replace with the actual URL
  const title = 'Check out this image!';
  const imageUrl = 'https://media.licdn.com/dms/image/D4D0BAQFtXdYnaPFoIg/company-logo_200_200/0/1694167785068/fastor_in_logo?e=1712793600&v=beta&t=UyA5OM59geWjhlQBC_I23AcBxWZzA8zeaFf5m0dL2S0'; // Replace with the actual image URL

  return (
    <div>
      <h1>React App</h1>
      <img src={imageUrl} alt="Your Image" style={{ maxWidth: '100%' }} />

      <div>
        {/* Facebook Share Button */}
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#YourHashtag">
          Share on Facebook
        </FacebookShareButton>

        {/* Twitter Share Button */}
        <TwitterShareButton url={shareUrl} title={title} via="your_twitter_handle">
          Share on Twitter
        </TwitterShareButton>

        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={shareUrl} title={title}>
          Share on WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareImage;
