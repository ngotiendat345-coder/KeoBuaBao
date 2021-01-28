import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
class Match extends Component{
    render(){
        const {winner,userHinhAnh,computerHinhAnh,chooseScissors,choosePaper,chooseRock,playGame}= this.props;
        return(
            <Wrapper className={playGame?'fadeIn':'fadeOut'}>
                <h2 className="winners">{winner? winner :'Choose an option'}</h2>
                <div className="hands">
                    <img className="player-hand" src={userHinhAnh} />
                    <img className="computer-hand" src={computerHinhAnh} />
                </div>
                <div className="options">
                    <button type="button" className="rock"
                        onClick={()=>{
                            chooseRock()
                        }}
                    >Rock</button>
                    <button type="button" className="paper"
                        onClick={()=>{
                            choosePaper()
                        }}
                    >Paper</button>
                    <button type="button" className="scissors"
                        onClick={()=>{
                            chooseScissors()
                        }}
                    >Scissors</button>
                </div>
            </Wrapper>

        )
    }
}
const Wrapper = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
transition:opacity 1s ease;
    .winners{
        text-align:center;
        color:white;
        font-size:50px;
    }
    .hands,.options{
        display:flex;   
        justify-content: space-around;
        align-items: center;

        .player-hand{
            transform:rotateY(180deg);
        }
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
        winner:state.winners,
        userHinhAnh:state.user.hinhAnh,
        computerHinhAnh:state.computer.hinhAnh,
        playGame:state.playGame
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        chooseRock:()=>{
            dispatch({
                type:'CHOOSE_ROCK',
            })
        },
        choosePaper:()=>{
            dispatch({
                type:'CHOOSE_PAPER',
            })
        },
        chooseScissors:()=>{
            dispatch({
                type:'CHOOSE_SCISSORS',
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Match);