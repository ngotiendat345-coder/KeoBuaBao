import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

class Intro extends Component{
    render(){
        const {playGame,playGameFunction}=this.props;
        return(
            <Wrapper className={playGame?'fadeOut':'fadeIn'}>
                <h1>Rock Paper and Scissors</h1>
                <button type="button"
                onClick={playGameFunction}>Let's Play</button>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
color:white;
display:flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
height:50vh;
transition:opacity 0,5s ease;
    h1{
        font-size:50px;
    }
    button{
        width:150px;
        height:50px;
        color:white;
        font-size:20px;
        background:rgb(45,117,96);
        border:none;
        border-radius:3px;
        cursor:pointer;
        
    }
`
const mapStateToProps =(state)=>{
    return {
      playGame:state.playGame
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        playGameFunction:()=>{
            dispatch({
                type:'PLAY_GAME',
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Intro);