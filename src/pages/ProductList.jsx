import React from 'react'
import styledComponents from 'styled-components'
import Navbar from '../componenets/Navbar';
import Announcement from '../componenets/Announcement'
import Products from '../componenets/Products';
import Newsletter from '../componenets/Newsletter';
import Footer from '../componenets/Footer';
import { styled } from '@material-ui/core/node_modules/@material-ui/styles';
import { mobile } from '../resposive';


const Container =styledComponents.div``; 
const Title =styledComponents.h1`
margin:20px;
`;
const FilterContainer =styledComponents.div`
display:flex;
justify-content:space-between;
`;
const Filter =styledComponents.div`

margin:20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}

`;
const FilterText=styledComponents.span`
font-size:20px;
font-weight:600;
${mobile({margin:"0px"})}


`;
const Select=styledComponents.select`
padding:10px;
margin:20px;
${mobile({margin:"10px 0px"})}

`;
const Option=styledComponents.option``;


const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>

      <Title>Dresses</Title>

      <FilterContainer>

<Filter><FilterText>Filter Products:</FilterText>


<Select>
    <Option disabled selected>Color</Option>
    <Option>White</Option>
    <Option>Blue</Option>
    <Option>Red</Option>
    <Option>Yellow</Option>
    <Option>Green</Option> 
</Select>
<Select>
    <Option disabled selected>Size</Option>
    <Option>XS</Option>
    <Option>S</Option>
    <Option>M</Option>
    <Option>L</Option>
    <Option>XL</Option> 
</Select>


</Filter>

<Filter><FilterText>Sort Products:</FilterText> 

<Select>
    <Option disabled selected>Newest</Option>
    <Option>Price(asc)</Option>
    <Option>Price(desc)</Option>

    </Select>



</Filter>

      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
    
  )
}

export default ProductList
