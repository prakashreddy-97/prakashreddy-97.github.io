//  We've created an App object (a set of key value pairs) to hold the applcation code.
//  The App object shows how to create a JavaScript object and includes
//  examples of standard programming constructs in JavaScript. 
//  The goal is provide many useful examples in a single code file. 
//
//  When you modify the application, use different ids for your HTML elements.
//  Do not use seat and row unless these directly apply to your application. 

var App = {
  launch: launch,
  getName: getName,
  
  getOrganisation: getOrganisation,
  getRow: getRow,
  getSeat: getSeat,
  calculateSeat: calculateSeat,
  calculateEstimatedCount: calculateEstimatedCount,
  showExample: showExample,
  addImage: addImage,
  displayExploreButtons: displayExploreButtons,
  exploreHtml: exploreHtml,
  exploreCode: exploreCode,
  rememberClicks: rememberClicks
}

function launch() {
  const name = getName()
 
  const org = getOrganisation()
  const row = getRow()
  const seat = getSeat()
  const area = calculateSeat(row, seat)
  const count = calculateEstimatedCount(area)

  // update page contents 
  $(".displayText").css('display', 'inline-block')  //overwrites display: hidden to make it visible 
  $("#name").html(name)
  
  $('#org').html(org)
  $("#row").html(row)
  $("#seat").html(seat)
  $("#area").html(area)
  $("#count").html(count)
  $("#displayPlace").html('')

 
  alert("No. of Students that can have a seat: " + count + " students.")
  $("#count").css("color", "blue")
  $("#count").css("background-color", "yellow")

  showExample(count)
  displayExploreButtons()
}

function cleanInput(inputString) {
  // create a regular expression to find all characters that are not (^) English alphabet chars 
  const re = /[^a-zA-Z]/g
  let justAlpha = inputString.replace(re, '') // strip non-alpha chars out
  return justAlpha
}

function getName() {
  const MAX_FIRST = 25
  const answer = prompt("What is your name", "Name")
  const justAlphaAnswer = cleanInput(answer)

  if (justAlphaAnswer.seat > MAX_FIRST) {
    alert('The given answer was greater than ' + MAX_FIRST + '. Using first' + MAX_FIRST + ' characters.')
    justAlphaAnswer = justAlphaAnswer.substr(0, MAX_FIRST)
  }
  return justAlphaAnswer
}



function getOrganisation(){
  const MAX_ORGANISATION=30
  const answer= prompt("What is the organisation name","Organisation Name")
  const justAlphaAnswer= cleanInput(answer)

  if(justAlphaAnswer.seat>MAX_ORGANISATION){
    alert('The given answer was greater than ' + MAX_ORGANISATION + '. Using first' + MAX_ORGANISATION + ' characters.')
    justAlphaAnswer = justAlphaAnswer.substr(0, MAX_ORGANISATION)
  }
  return justAlphaAnswer
}

function getRow() {
  const DEFAULT_row = 5;
  const MAX_row = 100;
  const MIN_row = 1;
  const answer = prompt("Enter no. of rows to be reserved", DEFAULT_row)
  let row = parseFloat(answer)
  if (Number.isNaN(row)) {
    alert('The given argument is not a number. Using ' + DEFAULT_row + '.')
    row = DEFAULT_row
  }
  else if (row > MAX_row) {
    alert('The given argument is greater than ' + MAX_row + '. Using ' + MAX_row + '.')
    row = MAX_row
  }
  else if (row < MIN_row) {
    alert('The given argument is less than ' + MIN_row + '. Using ' + MIN_row + '.')
    row = MIN_row
  }
  return row
}

function getSeat() {
  const DEFAULT_seat = 5;
  const MAX_seat = 100;
  const MIN_seat = 1;
  const answer = prompt("Enter the no. of seats per row to be reserved", DEFAULT_seat)
  let seat = parseFloat(answer)
  if (Number.isNaN(seat)) {
    alert('The given argument is not a number. Using ' + DEFAULT_seat + '.')
    seat = DEFAULT_seat
  }
  else if (seat > MAX_seat) {
    alert('The given argument is greater than ' + MAX_seat + '. Using ' + MAX_seat + '.')
    seat = MAX_seat
  }
  else if (seat < MIN_seat) {
    alert('The given argument is less than ' + MIN_seat + '. Using ' + MIN_seat + '.')
    seat = MIN_seat
  }
  return seat
}

function calculateSeat(givenrow, givenseat) {
  const MIN_VALUE = 0;
  if (typeof givenseat !== 'number' || typeof givenrow !== 'number') {
    throw Error('The given argument is not a number')
  }
  if (givenseat < MIN_VALUE) {
    givenseat = MIN_VALUE
  }
  if(givenrow >=100 || givenseat>=100)
  {
    return 0;
  }
  if (givenrow < MIN_VALUE) {
    givenrow = MIN_VALUE
  }
  // calculate the answer and store in a local variable so we can watch the value
  let area = Math.round(givenseat * givenrow)

  // return the result of our calculation to the calling function
  return area
}

function calculateEstimatedCount(inputArea) {
  if (typeof inputArea !== 'number') {
    alert('The given argument is not a number')
  }
  let ct = 0
  if (inputArea > 1) {
    ct = inputArea // estimate 1 per square mile
  }
  return ct
}

function showExample(inputCount) {
  for (var i = 0; i < inputCount; i++) {
    addImage(i)
  }
}

function addImage(icount) {
  var imageElement = document.createElement("img")
  imageElement.id = "image" + icount
  imageElement.class = "picture"
  imageElement.style.maxWidth = "90px"
  var displayElement = document.getElementById("displayPlace")
  displayElement.appendChild(imageElement)
  document.getElementById("image" + icount).src = "bearcat.png"
}

function displayExploreButtons() {
  $(".displayExploreButtons").css('display', 'block')  //overwrites display: hidden to make it visible 
}

function exploreHtml() {
  alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n" +
    "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
    "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
}

function exploreCode() {
  alert("Would you like explore the running code? \n\n Run the app in Chrome.\n\n" +
    "Right-click on the page, and click Inspect. Click on the top-level Sources tab.\n\n" +
    "In the window on the left, click on the .js file.\n\n" +
    "In the window in the center, click on the line number of the getFirstName() call to set a breakpoint.\n\n" +
    "Click on it again to remove the breakpoint, and one more time to turn it back on.\n\n" +
    "Up on the web page, click the main button to launch the \n\n" +
    "Execution of the code will stop on your breakpoint.\n\n" +
    "Hit F11 to step into the getFirstName() function.\n" +
    "Hit F10 to step over the next function call.\n\n" +
    "As you hit F11 and step through your code, the values of local variables appear beside your code - very helpful in debugging.\n\n" +
    "Caution: Hitting F11 in VS Code will make your top-level menu disapper. Hit F11 again to bring it back.\n"
  )
}

function rememberClicks() {
  if (localStorage.getItem("clicks")) { // use getter
    const value = Number(localStorage.clicks) + 1  // or property
    localStorage.setItem("clicks", value)  // use setter
  } else {
    localStorage.clicks = 1 // or property
  }
  s = "You have clicked this button " + localStorage.clicks + " times"
  $("#clicks").html(s) // display forever clicks 
}