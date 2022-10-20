var randonNumber =Math.floor(Math.random()*6)+1;


if(randonNumber===1)
{

  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice1.png");

}
 if(randonNumber===2)
{
  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice2.png");

}
if(randonNumber===3)
{
  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice3.png");

}
if(randonNumber===4)
{
  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice4.png");

}
if(randonNumber===5)
{
  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice5.png");

}
if(randonNumber===6)
{
  document.querySelector("img").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice6.png");

}


var randonNumber2=Math.floor(Math.random()*6)+1;


if(randonNumber2===1)
{

  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice1.png");

}
 if(randonNumber2===2)
{
  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice2.png");

}
if(randonNumber2===3)
{
  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice3.png");

}
if(randonNumber2===4)
{
  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice4.png");

}
if(randonNumber2===5)
{
  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice5.png");

}
if(randonNumber2===6)
{
  document.querySelector("img.img2").setAttribute("src","C:\\Users\\elega\\OneDrive\\Desktop\\uddd\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images\\dice6.png");

}



if(randonNumber>randonNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if(randonNumber2>randonNumber)
{
  document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
else
{
  document.querySelector("h1").innerHTML="Its a draw!!";
}
