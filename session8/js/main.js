var random_number
var number_of_guesses



function main() {
    alert("working")
    random_number = getRandomArbitrary(1, 100);
    document.getElementById('result').innerHTML;
    document.getElementById('button1').addEventListener('click', guess)
}




function getRandomArbitrary(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}





function guess() {
    var input
    if (input > result) {
        console.log("Larger than the number");
    }
    else if (input < result) {
        console.log("Smaller than the number");
    }
    else(input == result) {
        console.log("An exact match!");
    }


    console.log('click');
}
