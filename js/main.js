const boxContainer = document.getElementById("box-container");

for (let num = 1; num <= 100; num++) {
    let boxText = num;
    let boxColour = "";
    
    if (num % 3 == 0 && num % 5 == 0) {
        boxText = "FizzBuzz";
        boxColour = "red"
    } else if (num % 5 == 0) {
        boxText = "Buzz";
        boxColour = "yellow"
    } else if (num % 3 == 0) {
        boxText = "Fizz";
        boxColour = "green"
    }
    
    console.log(boxText);

    boxContainer.innerHTML += `
        <div class="col-3 ${boxColour}">
            <h3>${boxText}</h3>
        </div>
    `
}