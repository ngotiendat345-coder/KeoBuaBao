import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
class Score extends Component{
    render(){
        const {computerScore,userScore} =  this.props;
        return(
            <Wrapper>
                <div className="score">
                    <div className="player-score">
                        <h3>Player</h3>
                        <p>{userScore}</p>
                    </div>
                    <div className="computer-score">
                        <h3>Computer</h3>
                        <p>{computerScore}</p>
                    </div>
                </div>

            </Wrapper>
        )
    }
}
const Wrapper = styled.section`
.score{
    display:flex;
    color:white;
    justify-content: space-around;
    align-items: center;
    height:20vh;
    h3{
        font-size:30px;
    }
    p{
        text-align:center;
        font-size:20px;
    }
}

`
const mapStateToProps =(state)=>{
    return {
        userScore:state.user.diemSo,
        computerScore:state.computer.diemSo
    }
}
export default connect(mapStateToProps)(Score);