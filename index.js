window.addEventListener('DOMContentLoaded',() => {
  const box= Array.from(document.querySelectorAll('.box'));
  const playerDisplay = document.querySelector('.display-player');
  const resetButton = document.querySelector('#reset');
  const announcer = document.querySelector('.announcer');

  let board =['','','','','','','','',''];
  let currentPlayer = 'X';
  let isGameActive = true;

  const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = "TIE";

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];

  const announce =(type) =>{
    switch(type){
      case PLAYERX_WON:
        announcer.innerHTML
    }
  }

  const announce =(type) =>{
    switch(type){
      case PLAYERO_WON:
           announcer.innerHTML ='Player <span class="playerO">O</span> Won';
           break;
           case PLAYERX_WON:
            announcer.innerHTML ='Player<span class ="playerX">X</span> Won';
            break;
            case TIE:
              announcer.innerText ='Tie';
    }
    announcer.classlist.remove('hide');
  };

  const changePlayer=() =>{
    playerDisplay.classlist.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O':'X';
    playerDisplay.innerText= currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
  }

  const userAction =(title,index) =>{
    if(isValidAction(box) && isGameActive){
      box.classlist.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  }


  box.forEach((box,index) => {
    board.addEventListener('click',() => userAction(box,index));
  });

resetButton.addEventListener('click',resetBoard)
});