const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/text');
  res.end('<!DOCTYPE html>
  <html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
   }
   body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e3eb;
   }
   .container{
    position: relative;
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    padding: 10px 10px 20px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 05);
   }
   .display{
    height: 80px;
    width: 100%;
    outline: none;
    border: none;
    text-align: right;
    margin-bottom: 10px;
    font-size: 25px;
    color: #000e1a;
    pointer-events: none;
   }
   .buttons{
    display: grid;
    grid-gap : 10px;
    grid-template-columns: repeat(4, 1fr);
   }
   .buttons button{
    padding: 10px;
    border-radius: 6px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    background-color: #eee;
   }
   .buttons button:active {
    transform: scale(.99);
   }
   .operator{
    color: #2f9fff;
   }
  
    </style>
  </head>
  
  <body>
    <div class="container">
      <input type="text" class="display">
      <div class="buttons">
        <button class="operator" data-value="AC">AC</button>
        <button class="operator" data-value="DEL">DEL</button>
        <button class="operator" data-value="%">%</button>
        <button class="operator" data-value="/">/</button>
  
        <button data-value="7">7</button>
        <button data-value="8">8</button>
        <button data-value="9">9</button>
        <button class="operator" data-value="*">*</button>
  
        <button data-value="4">4</button>
        <button data-value="5">5</button>
        <button data-value="6">6</button>
        <button class="operator" data-value="-">-</button>
  
        <button data-value="1">1</button>
        <button data-value="2">2</button>
        <button data-value="3">3</button>
        <button class="operator" data-value="+">+</button>
  
        <button data-value="0">0</button>
        <button data-value="00">00</button>
        <button data-value=".">.</button>
        <button class="operator" data-value="=">=</button>
  
      </div>
    </div>
  
  
    <script>
    const display = document.querySelector('.display');
      const buttons = document.querySelectorAll('.buttons button');
      const specialChar = ["%", "/", "*", "-", "+"];
      let output = " ";
  
      const calculate = (btnValue) => {
        display.focus();
        if (btnValue === "=" && output !== "") {
          output = new Function('return ' + output.replace("%", "/100"))();
        } else if (btnValue === "AC") {
          output = "";
        } else if (btnValue === "DEL") {
          output = output.toString().slice(0, -1);
        } else {
          if (output === "" && specialChar.includes(btnValue)) return;
          output += btnValue;
        }
  
        display.value = output;
      }
  
      buttons.forEach((button) => {
        button.addEventListener('click', (e) =>
          calculate(e.target.dataset.value));
      });
   
    </script>
  </body>
  </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});