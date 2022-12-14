import { ArrowLeft, ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { sliderItems } from '../data';
import { mobile } from '../resposive';

const Container = styledComponents.div`
width:100%;
height:100vh;
display:flex;
overflow:hidden;
position:relative;
${mobile({display:"none"})}
`;

const Arrow = styledComponents.div`
width:50px;
height: 50px;
background-color:#ffffff;
border-radius:100%;
display:flex;
align-items:center; 
justify-content: center;
position: absolute;
top:0;
bottom:0;
margin:auto;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
cursor:pointer;
opacity:0.5;
z-index:2;
`;
const Wrapper = styledComponents.div`
height:100%;
display: flex;
transition:all 1.5s ease;
transform:translateX(${(props)=> props.slideIndex * -100}vw);

`;
const Slide = styledComponents.div`
display: flex;
align-items:center;
width: 100vw;
height: 100vh;
background-color:#${props=>props.bg};

`;
const ImgContainer= styledComponents.div`
height: 100%;
flex:1;

`;

const Image = styledComponents.img`

height:80%`;
const InfoContainer= styledComponents.div`

flex:1;
padding: 50px;
`;
const Title = styledComponents.h1`
font-size:70px;

`;
const Desc = styledComponents.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:2px;


`;
const Button= styledComponents.button`
padding:10px;
font-size:20px;
background-color:transparent;
border: 1px solid black;
cursor:pointer;
`;
 

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) =>{
   if(direction === "left"){
     setSlideIndex(slideIndex > 0? slideIndex-1 : 2)
   }  else {
     setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
   }

  };
  return (
    
        <Container> 
        <Arrow direction="left" onClick={()=>handleClick("left")}>
              
            <ArrowLeftOutlined/>
             </Arrow>
              <Wrapper slideIndex = {slideIndex}> 
                {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}> 
                <ImgContainer>
                     <Image src={item.img}/>
                </ImgContainer> 

                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                  

                </InfoContainer>

                </Slide >))}

              
              </Wrapper>
             <Arrow direction="right" onClick={()=>handleClick("right")}> 
            <ArrowRightOutlined/>
             </Arrow>
         
        </Container>
      
    
  )
}

export default Slider
