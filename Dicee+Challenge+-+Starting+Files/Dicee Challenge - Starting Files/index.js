function getRandomNumber(loLimit, hiLimit)
{
    let val = Math.floor(Math.random() * hiLimit) + loLimit;
    return val;
}

function pickImagePlayer1()
{
    let randonNumber1 = getRandomNumber(1, 6);
    switch (randonNumber1)
    {
        case 1 :
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
            break;
        case 2 :
            document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
            break;
        case 3 :
            document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
            break;
        case 4 :
            document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
            break;
        case 5 :
            document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
            break;
        case 6 :
            document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
            break;
        default:
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
            break;
    }
    return randonNumber1;
}

function pickImagePlayer2()
{
    let randonNumber1 = getRandomNumber(1, 6);
    switch (randonNumber1)
    {
        case 1 :
            document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
            break;
        case 2 :
            document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
            break;
        case 3 :
            document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
            break;
        case 4 :
            document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
            break;
        case 5 :
            document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
            break;
        case 6 :
            document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
            break;
        default:
            document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
            break;
    }
    return randonNumber1;
}
var p1 = pickImagePlayer1();
var p2 = pickImagePlayer2();

if (p1 > p2)
{
    document.querySelector("h1").innerHTML = "!Left Player Won";
}
else if (p1 < p2)
{
    document.querySelector("h1").innerHTML = "Right Player Won!";
}
else
{
    document.querySelector("h1").innerHTML = "!Draw!";

}
