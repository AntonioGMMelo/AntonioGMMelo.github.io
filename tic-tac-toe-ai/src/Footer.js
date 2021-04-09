import React from 'react'
import styled from 'styled-components'

    function Footer(){

        return (

            <Container>            
        
                <LinkInstance href = "https://github.com/AntonioGMMelo"><img src = "./GitHub-Mark-Light-32px.png"></img></LinkInstance>
                <LinkInstance href = "https://www.linkedin.com/in/antoniogmmelo/"><img src = "./Li-In-Bug.png" width = "32px" height = "32px"></img></LinkInstance>
                <LinkInstance href = "https://antoniogmmelo.github.io/MyWeb" title = "Personal Website"><img src = "./home.png" width = "32px" height = "32px"></img></LinkInstance>
        
            </Container>
        
        );

    }

    export default Footer

    const Container = styled.div`
    
        background: #000021;
        min-height:10vh;
        display:flex;
        justify-content:center;
        align-items:center;

    `
    const LinkInstance = styled.a`
    
        margin: 0 20px 0 0;

    `