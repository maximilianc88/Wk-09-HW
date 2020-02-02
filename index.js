const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

const colors = {
    green: {
      wrapperBackground: '#E6E1C3',
      headerBackground: '#C1C72C',
      headerColor: 'black',
      photoBorderColor: '#black'
    },
    blue: {
      wrapperBackground: '#5F64D3',
      headerBackground: '#26175A',
      headerColor: 'white',
      photoBorderColor: '#73448C'
    },
    pink: {
      wrapperBackground: '#879CDF',
      headerBackground: '#FF8374',
      headerColor: 'white',
      photoBorderColor: '#FEE24C'
    },
    red: {
      wrapperBackground: '#DE9967',
      headerBackground: '#870603',
      headerColor: 'white',
      photoBorderColor: 'white'
    }
  };

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username?"
    },
    {
      type: "list",
      name: "color",
      choices: ["red","blue", "green","pink"]
    }
  ]);
}

function generateHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <title>Document</title>
        <style>
        @page {
          margin: 0;
        }
       *,
       *::after,
       *::before {
       box-sizing: border-box;
       }
       html, body {
       padding: 0;
       margin: 0;
       }
       html, body, .wrapper {
       height: 100%;
       }
       .wrapper {
       background-color: ${colors[data.color].wrapperBackground};
       padding-top: 100px;
       }
       body {
       background-color: white;
       -webkit-print-color-adjust: exact !important;
       font-family: 'Cabin', sans-serif;
       }
       main {
       background-color: #E9EDEE;
       height: auto;
       padding-top: 30px;
       }
       h1, h2, h3, h4, h5, h6 {
       font-family: 'BioRhyme', serif;
       margin: 0;
       }
       h1 {
       font-size: 3em;
       }
       h2 {
       font-size: 2.5em;
       }
       h3 {
       font-size: 2em;
       }
       h4 {
       font-size: 1.5em;
       }
       h5 {
       font-size: 1.3em;
       }
       h6 {
       font-size: 1.2em;
       }
       .photo-header {
       position: relative;
       margin: 0 auto;
       margin-bottom: -50px;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       background-color: ${colors[data.color].headerBackground};
       color: ${colors[data.color].headerColor};
       padding: 10px;
       width: 95%;
       border-radius: 6px;
       }
       .photo-header img {
       width: 250px;
       height: 250px;
       border-radius: 50%;
       object-fit: cover;
       margin-top: -75px;
       border: 6px solid ${colors[data.color].photoBorderColor};
       box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
       }
       .photo-header h1, .photo-header h2 {
       width: 100%;
       text-align: center;
       }
       .photo-header h1 {
       margin-top: 10px;
       }
       .links-nav {
       width: 100%;
       text-align: center;
       padding: 20px 0;
       font-size: 1.1em;
       }
       .nav-link {
       display: inline-block;
       margin: 5px 10px;
       }
       .workExp-date {
       font-style: italic;
       font-size: .7em;
       text-align: right;
       margin-top: 10px;
       }
       .container {
       padding: 50px;
       padding-left: 100px;
       padding-right: 100px;
       }

       .row {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         margin-top: 20px;
         margin-bottom: 20px;
       }

       .card {
         padding: 20px;
         border-radius: 6px;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         margin: 20px;
       }
       
       .col {
       flex: 1;
       text-align: center;
       }

       a, a:hover {
       text-decoration: none;
       color: inherit;
       font-weight: bold;
       }

       @media print { 
        body { 
          zoom: .75; 
        } 
       }
    </style>

      </head>
      <body>
        <div class="container mh-100 mw-100 m-0 p-0 ">
          <div
            class="row m-0 p-5"
            style="background-color:${colors[data.color].wrapperBackground}; height: 300px;"
          ></div>
          <div
            class="row m-0 p-0"
            style="background-color: ${colors[data.color].headerBackground};
          position: absolute;
          top: 12%;
          left: 10%;
          width: 80%; height: 300px;"
          >
          <img src="https://www.fillmurray.com/100/100" class="img-fluid" alt="Responsive image" style="border-width: .3rem;
          position: absolute;
          bottom: 47%;
          left: 41%;
          width: 208px;
          height: 208px;
          border-radius: 110px;
          border-style: solid;
          border-color: ${colors[data.color].photoBorderColor};">
          <div class="col-md-1"></div>
          <div class="col-md-10" style ="display: flex;
          flex-flow: column-reverse;position: absolute;
        top: 56%;
        left: 10%;">
            <div class="text-center">
              <h3 style="color: white;">Hi! </h3>
              <h3 style="color: white;">My name is Max </h3>
              <h4 style="color: white;">Currently @@ ZillowGroup</h4>
              <div class="text-center" style="display:flex; flex-direction: row; justify-content: center;">
              <p style="color: white;">Seattle, WA</p>
              <p class="mx-4" style="color: white;">GitHub</p>
              <p style="color: white;">Blog</p>
            </div>
            </div>
          </div>
          <div class="col-md-1"></div>
      </div>
      <div
      class="row m-0"
      style="background-color: #c1c1c1; height: 50px;"
    ></div>
          <div
            class="row m-0 p-5"
            style="background-color: #c1c1c1; height: 150px;"
          >
          <div class="col-md-2"></div>
          
          <div class="col-md-4">
            <div class="text-center  ml-5" style="width: 18rem; background-color: ${colors[data.color].headerBackground};
            color: ${colors[data.color].headerColor};">
              <div class="card-body">
                <h5 class="card-title">Public Repositories</h5>
                <p class="card-text">#</p>
              </div>
            </div>
          </div>
    
          <div class="col-md-4">
            <div class="text-center  ml-5" style="width: 18rem; background-color: ${colors[data.color].headerBackground};
            color: ${colors[data.color].headerColor};">
              <div class="card-body">
                <h5 class="card-title">Followers</h5>
                <p class="card-text">#</p>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
    </div>
            </div>
          <div
            class="row m-0 p-5"
            style="background-color: #c1c1c1; height: 200px;"
          >
          <div class="col-md-2"></div>
          
          <div class="col-md-4">
            <div class="text-center  ml-5" style="width: 18rem;background-color: ${colors[data.color].headerBackground};
            color: ${colors[data.color].headerColor};">
              <div class="card-body">
                <h5 class="card-title">GitHub Stars</h5>
                <p class="card-text">#</p>
              </div>
            </div>
          </div>
    
          <div class="col-md-4">
            <div class="text-center  ml-5" style="width: 18rem; background-color: ${colors[data.color].headerBackground};
            color: ${colors[data.color].headerColor};">
              <div class="card-body">
                <h5 class="card-title">Following</h5>
                <p class="card-text">#</p>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div></div>
          <div
            class="row m-0 p-5"
            style="background-color: ${colors[data.color].wrapperBackground}; height: 200px;"
          ></div>
        </div>
      </body>
    </html>`;
}

promptUser()
  .then(data => {
    const html = generateHTML(data);

    return writeFileAsync("index.html", html);
  })
  .then(() => {
    console.log("Successfully wrote to index.html");
  })
  .catch(console.error);
