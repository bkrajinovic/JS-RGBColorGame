let colors = generateRandomColors(6);

    let squares = document.querySelectorAll(".square");
    let pickedColor = pickColor();
    let colorDisplay = document.getElementById("colorDisplay");
    let messageDisplay = document.getElementById("message");
    let h1Background = document.querySelector("h1");
    let newColors = document.getElementById("reset");

    

    newColors.addEventListener("click", function(){
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        h1Background.style.backgroundColor = "#232323"

        for(let i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
    }
});

    colorDisplay.textContent = pickedColor;

    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                h1Background.style.backgroundColor = clickedColor;
                messageDisplay.textContent = "Correct!";
                changeColors();


            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    };

    function changeColors(){
        for(let i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = pickedColor;
    }};




    function generateRandomColors(num){
        let arr = [];
        for(let i=0; i<num; i++){
            arr.push(randomColor())
        }
        return arr;
    };

    function pickColor(){
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
     };

     function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        "rgb(r, g, b)"
        return "rgb(" + r + ", " + g + ", " + b +")";
     };