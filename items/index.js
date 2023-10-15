// FOOTER
const d = new Date();
let year = d.getFullYear();
document.getElementById('years').innerHTML=year;


let aud = document.getElementById("audio001");
// BUTTON RESET
function reset(){
    
// ALERT ICON
  aud.play();

  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this!",
    icon: "warning",
    buttons: {
      cancel: {
        visible: true,
        text: 'No, cancel!'
      },
      confirm: {
      	visible: true,
        text: 'Yes, delete it!',
        className: 'swal-warning',
         
      }
    }
  }).then(function(isConfirmed) {
    if (isConfirmed === null) {
      aud.pause();
    }
    else{
        swal({
            icon: "success",
            buttons: false,
        })
    setTimeout(function(){location.reload();},1000);
        
    }
  });
}

let aud1 = document.getElementById("audio002");

swal({
    title:'YOU WELCOME!',
   Audio:aud1.play(),
   buttons: {
    confirm: {
        visible: true,  
    }
  }
}).then(function(isConfirmed) {
  if (isConfirmed === true) {
    aud1.pause();
  }
})
let title=document.querySelector('.title');
let turn = 'x';
let squares=[];
var y = document.getElementById("audio0"); 

function end(num1,num2,num3)
{
    document.querySelector('body').style.pointerEvents = "none";
    y.play();
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById('item'+num1).style.background='#000';
    document.getElementById('item'+num2).style.background='#000';
    document.getElementById('item'+num3).style.background='#000';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.href='../index.html'},7000);
    

}
function winner()
{
    for (let i=1 ;i<10;i++)
    {
        squares[i]= document.getElementById('item' +i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        end(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '')
    {
        end(4,5,6);

    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')
    {
        end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
    {
        end(1,4,7);
        
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
    {
        end(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
        end(3,6,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
    {
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')
    {
        end(3,5,7)
        
    }
  
}

function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        turn ='o';
        title.innerHTML='O';
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn ='x';
        title.innerHTML='X';
    }
    winner();
}