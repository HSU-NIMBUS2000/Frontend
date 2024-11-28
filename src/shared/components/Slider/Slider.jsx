import React from "react";
import './Slider.css';
import styled from "styled-components";

function Slider({list}) {
    return (
      <SliderContainer>
        {/* Navigation Links
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a> */}
  
        {/* Slides */}
        <Slides>
            {list.map((e,i)=>(
                <Slide id={i}>{e.summaryContent}</Slide>
            ))}
        </Slides>
      </SliderContainer>
    );
  }
  
  export default Slider;

  export const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;

  > a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;

    &:active {
      top: 1px;
    }

    &:focus {
      background: #000;
    }
  }

  @supports (scroll-snap-type) {
    > a {
      display: none;
    }
  }
`;

export const Slides = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6572D2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Slide = styled.div`
    padding: 50px;
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
//   height: 300px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;

  &:target {
    /* Uncomment and customize if needed */
    /* transform: scale(0.8); */
  }
`;

export const AuthorInfo = styled.div`
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;

  a {
    color: white;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
