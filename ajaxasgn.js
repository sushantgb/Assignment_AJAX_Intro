//variable for increment and decrement
var i = 0;

//variable to store value of CD tag
var cdTag;

//variable to store length of cd variable
var cdLen;

//calling the function to display and make connection with the xml file
displayContent(i);

//definition of function to retrieve and display data
function displayContent(i) {
    //xhr request initialization
    const textval = new XMLHttpRequest();
    //definition when event/window loads
    textval.onload = function () {
        const doc = textval.responseXML; //retrieving xml document
        cdTag = doc.getElementsByTagName("CD");
        cdLen = cdTag.length; //storing length of cd
        //calling the function to print data
        defData(i);
    };
    //ajax connection query
    textval.open("GET", "ajaxasgn.xml"); //xml file
    textval.send();
}

//function definition to display content
function defData(i) {
    let display;
    //display content in three rows of tables    
    display = "<table><tr><th>Artist :</th><td>" + cdTag[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td></tr>" + "<tr><th>Title :</th><td>" + cdTag[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>" + "<tr><th>Year :</th><td>" + cdTag[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "</td></tr></table>"

    document.getElementById('catalog').innerHTML = display;
}

//function definition for back button
function back() {
    //checks if i is greater than [0] or not
    if (i > 0) {
        i--; //does decrement if found true
        displayContent(i); //returns the value to the displayContent function
    }
}

//function definition for next button
function next() {
    //checks if i is smaller than the one less than length of cd variable
    if (i < cdLen - 1) {
        i++; //does increment if true
        displayContent(i); //returns the value to the function
    }
}
