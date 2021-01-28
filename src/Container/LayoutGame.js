import React, { Component } from 'react';
import Match from '../Component/Match';
import Score from '../Component/Score';
import styled from 'styled-components';
import Intro from '../Component/Intro';

class LayoutGame extends Component{
    render(){
        return(
           <Wrapper>
                <Score/>
               <Intro/>
               <Match/>
              
           </Wrapper>
        )
    }
}

const Wrapper = styled.section`
height:100vh;
background-color:rgb(39,41,68);
.fadeOut{
    opacity: 0;
    pointer-events: none;
}
.fadeIn{
    opacity:1;
    pointer-events: all;
}
`
export default LayoutGame;