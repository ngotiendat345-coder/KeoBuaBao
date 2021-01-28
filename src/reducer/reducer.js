const init = {
    user:{
        hinhAnh:'./assets/rock.png',
        diemSo:0,
    },
    computer:{
        hinhAnh:'./assets/rock.png',
        diemSo:0,
    },
    winners:'',
    playGame:false
}

const reducer=(state=init,action)=>{
    if(action.type==="PLAY_GAME"){
        return {...state,playGame:true};
    }

    let computerChooseNumber = Math.floor(Math.random()*3);
    let computerArrayChoose = ['rock','paper','scissors'];
    let computerChoose = computerArrayChoose[computerChooseNumber];
    //console.log(computerChoose)
    if (action.type === 'CHOOSE_ROCK') {
        let userChoose = 'rock';
        let newComputer = { hinhAnh: `./assets/${computerChoose}.png`, diemSo: state.computer.diemSo };
        let newUser = { hinhAnh: `./assets/${userChoose}.png`, diemSo: state.user.diemSo }
        let alert = whoWin(userChoose, computerChoose, state.user.diemSo, state.computer.diemSo);
        if (alert.winner === 'user') {
            newUser.diemSo = alert.score;
        }
        if (alert.winner === 'computer') {
            newComputer.diemSo = alert.score;
        }
        
        return { winners: alert.text, computer: newComputer, user: newUser,playGame:true };
    }
    if (action.type === 'CHOOSE_PAPER') {
        let userChoose = 'paper';
        let newComputer = { hinhAnh: `./assets/${computerChoose}.png`, diemSo: state.computer.diemSo };
        let newUser = { hinhAnh: `./assets/${userChoose}.png`, diemSo: state.user.diemSo }
        let alert = whoWin(userChoose, computerChoose, state.user.diemSo , state.computer.diemSo);
        if (alert.winner === 'user') {
            newUser.diemSo = alert.score;
        }
        if (alert.winner === 'computer') {
            newComputer.diemSo = alert.score;
        }

        return { winners: alert.text, computer: newComputer, user: newUser ,playGame:true };
    }
    if (action.type === 'CHOOSE_SCISSORS') {
        let userChoose = 'scissors';
        let newComputer = { hinhAnh: `./assets/${computerChoose}.png`, diemSo: state.computer.diemSo };
        let newUser = { hinhAnh: `./assets/${userChoose}.png`, diemSo: state.user.diemSo }
        let alert = whoWin(userChoose, computerChoose, state.user.diemSo , state.computer.diemSo );
        if (alert.winner === 'user') {
            newUser.diemSo = alert.score;
        }
        if (alert.winner === 'computer') {
            newComputer.diemSo = alert.score;
        }
        return { winners: alert.text, computer: newComputer, user: newUser,playGame:true  };
    }
    

    function whoWin(userChoice,computerChoice,userScore,computerScore){
        if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
            return {winner:'user',score:userScore+1,text:'USER WIN'}
        }
        else if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') ||
            (computerChoice === 'scissors' && userChoice === 'paper')) {
                return {winner:'computer',score:computerScore+1,text:'COMPUTER WIN'}
        }
        else{
            return {text:'IT IS A TIE'};
        }
    }
    return state;
}

export default reducer;

  // if(alert.winner){
            //     newComputer={hinhAnh:`./assets/${computerChoose}`,diemSo:state.computer.diemSo+1};
            // }else{
            //     newUser ={hinhAnh:`./assets/${userChoose}`,diemSo:state.user.diemSo+1}
            // }

                   // let computerChooseNumber = Math.ceil(Math.random()*3);
            // let computerArrayChoose = ['rock','paper','scissors'];
            // let computerChoose = computerArrayChoose[computerChooseNumber];