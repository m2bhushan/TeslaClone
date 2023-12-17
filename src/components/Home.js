import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return <Container>
    <Section
        title="Model S"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText= "Exiting inventory"
    />
    <Section
         title="Model Y"
         description= "Order Online for Touchless Delivery"
         backgroundImg="model-y.jpg"
         leftBtnText="Custom order"
         rightBtnText= "Exiting inventory"/>

    <Section
        title="Model 3"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText= "Exiting inventory"/>

    <Section
        title="Model X"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText= "Exiting inventory"/>

<Section
        title="Lowest Cost Solar Panels in America"
        description= "Monay-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText= "Learn more"/>
<Section
        title="Solar for New Roofs"
        description= "Solar Rooof Costs Less Than a New Roofs Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="order Now"
        rightBtnText= "Learn more"/>
        
<Section
        title="Accessories"
        description= ""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"/>



  </Container>;
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
