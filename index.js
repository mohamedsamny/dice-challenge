function myFunction(){

  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = 1 + Math.floor(randomNumber1);

  var randomImage1 = "dice" + randomNumber1 + ".png";
  var image1 = "images/" + randomImage1;
  document.querySelector(".img1").setAttribute("src", image1);


  var randomNumber2 = Math.random();
  randomNumber2 = randomNumber2 * 6;
  randomNumber2 = 1 + Math.floor(randomNumber2);

  var randomImage2 = "dice" + randomNumber2 + ".png";
  var image2 = "images/" + randomImage2;
  document.querySelector(".img2").setAttribute("src", image2);


  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";


  }else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";


  }else {
    document.querySelector("h1").innerHTML = "DRAW!";
  }

  }
