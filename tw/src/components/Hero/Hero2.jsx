import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from '../../assets/hero.jpg'; // Ensure the path is correct

const zoomOut = keyframes`
  from {
    transform: scale(1.5); /* Start with a larger image */
  }
  to {
    transform: scale(1); /* End at its normal size */
  }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Adjust the height as needed */
  overflow: hidden; /* Hide overflow to prevent zoomed image from spilling */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  animation: ${zoomOut} 3s ease-in-out; /* Apply the zoom-out animation with a slower duration */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the overlay color and opacity */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.h1`
  color: white;
  font-size: 3rem; /* Increase the font size as needed */
  font-weight: bold;
`;

const Hero2 = ({ pageName }) => {
  return (
    <HeroContainer>
      <BackgroundImage /> {/* Background image with zoom effect */}
      <Overlay>
        <HeroText>{pageName}</HeroText>
      </Overlay>
    </HeroContainer>
  );
};

export default Hero2;
