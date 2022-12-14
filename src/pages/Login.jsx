
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../resposive';

const Container=styledComponents.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),

url("https://www.thehabeshaweb.com/wp-content/uploads/2021/01/photo_2020-12-29_11-41-41.jpg");
background-size:cover;
display:flex;
align-items:center;
justify-content:center;


`;
const Wrapper=styledComponents.div`

width:25%;
padding:20px;
background-color:white;
${mobile({width:"75%"})}

`;
const Title=styledComponents.h1`
font-size:24px;
font-weight:300;`;
const Form=styledComponents.form`
display:flex;
flex-direction:column;
`;
const Input=styledComponents.input`
flex:1;
min-width:40%;
margin: 10px 0px ;
padding:10px;
`;


const Button=styledComponents.button` 
width:40%;
border:none; 
padding:15px 20px;
background-color:#024dff;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Link =styledComponents.a`
margin: 5px 0px;
text-decoration:underline;
cursor:pointer;
font-size:12px;


`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
    <Title>SIGN IN</Title>
    <Form>
        <Input placeholder="username"/>
        <Input placeholder="password"/>
       
         <Button>LOGIN</Button>
         <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
    </Form>

    </Wrapper>
  </Container>
  )
}

export default Login
