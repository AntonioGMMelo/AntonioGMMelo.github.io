import React from 'react'
import styled from 'styled-components'

    function Content(){

        return (

            <Container>            
        
                <TicTacToeBoard>

                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>
                    <TicTacToeSlot></TicTacToeSlot>

                </TicTacToeBoard>

            </Container>
        
        );

    }

    export default Content

    const Container = styled.div`
    
        background: #555555;
        min-height:80vh;
        display:flex;
        justify-content:center;
        align-items:center;

    `

    const TicTacToeBoard = styled.div`
        
        height:60vh;
        width:60vh;
        background:#FFF;
        border: 5px solid #000;
        display:grid;
        grid-template-columns: auto auto auto;
        grid-template rows: auto auto auto;
        border-radius:10px;

    `

    const TicTacToeSlot = styled.div`
    
        border:2px solid #000080;
        border-radius 5px;
        background:url(./X.png);
        background-size:contain;
        background-repeat: no-repeat;
    
    `
