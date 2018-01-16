function disappear(){
    var classLoop = document.getElementsByClassName("grades").length;
    for(var u=0; u<classLoop; u++) {
        document.getElementsByClassName("grades")[u].style.display = 'none';
    }
    document.getElementById("1").value ="66,88,77,56"
    document.getElementById("2").value ="46,86,17,44"
    document.getElementById("3").value ="66,33,55,56"
    document.getElementById("4").value ="33,11,84,12"
    document.getElementById("5").value ="24"
    document.getElementById("6").value ="26"
    document.getElementById("7").value ="27"
    document.getElementById("8").value ="23"
}
function start() {
    var points = [];
    var weight = [];
    var final = [];
    var ultimateFinalGrade = 0;
    var test = 0;
    for(var i=1; i<5; i++){
        points.push(stringToAverage(i));
    }
    for(var t=5; t<9; t++){
        weight.push(stringToWeight(t));
    }
    for(var v=0; v<4; v++){
        final.push(finalGrade(v,points,weight));
    }
    for(var o=0; o<final.length; o++){
        ultimateFinalGrade += final[o];
    }
    if(ultimateFinalGrade < 60){
        var letter = "F";
        document.body.style.backgroundColor = "red";
    }
    if(ultimateFinalGrade < 70 && ultimateFinalGrade >=60 ){
        var letter = "D";
        document.body.style.backgroundColor = "orange";
    }
    if(ultimateFinalGrade < 80 && ultimateFinalGrade >=70 ){
        var letter = "C";
        document.body.style.backgroundColor = "yellow";
    }
    if(ultimateFinalGrade < 90 && ultimateFinalGrade >=80 ){
        var letter = "B";
        document.body.style.backgroundColor = "blue";
    }
    if(ultimateFinalGrade < 97 && ultimateFinalGrade >=90 ){
        var letter = "A";
        document.body.style.backgroundColor = "limegreen";
    }
    if(ultimateFinalGrade >=97){
        var letter = "A+";
        document.body.style.backgroundColor = "darkgreen";

    }
    if(isNaN(ultimateFinalGrade)){
        alert("Point and weight values must be numbers");
        return;
    }
    for(var j=0; j<final.length; j++){
        test += weight[j];
    }
    if(test !=100){
        alert("Weight values must add up to 100!");
        return;
    }
    if(ultimateFinalGrade>100){
        alert("Final grade is over 100%. Make sure you have entered the point and weight values correctly.");
    }
    document.getElementById("g5").innerHTML ='<p>Final Grade:</p>'+'<p>'+ letter +"     (" + ultimateFinalGrade +"%)"+'</p>';
    var classLoop = document.getElementsByClassName("grades").length;
    for(var u=0; u<classLoop; u++) {
        document.getElementsByClassName("grades")[u].style.display = 'block';
    }
}

function finalGrade(v,points,weight){
    var weighted = points[v]*weight[v]/100;
    return weighted;
}

function stringToAverage(id) {
    var total = 0;
    var points = document.getElementById(id).value;
    var newArr = points.split(",");
    for(var w=0; w<newArr.length; w++) {
        newArr[w] = parseInt(newArr[w]);
    }
    for(var a=0; a<newArr.length; a++){
        total += newArr[a];
    }
    var average = total/newArr.length;
    if(average < 60){
        var letterGrade = "F";
    }
    if(average < 70 && average >=60 ){
        var letterGrade = "D";
    }
    if(average < 80 && average >=70 ){
        var letterGrade = "C";
    }
    if(average < 90 && average >=80 ){
        var letterGrade = "B";
    }
    if(average < 97 && average >=90 ){
        var letterGrade = "A";
    }
    if(average >=97){
        var letterGrade = "A+";
    }
    if(id==1){
        document.getElementById("g1").innerHTML ='<p>Homework Grade:</p>'+'<p>'+ letterGrade +"     (" + average +"%)"+'</p>';
    }
    if(id==2){
        document.getElementById("g2").innerHTML ='<p>Classwork Grade:</p>'+'<p>'+ letterGrade +"     (" + average +"%)"+'</p>';
    }
    if(id==3){
        document.getElementById("g3").innerHTML ='<p>Participation Grade:</p>'+'<p>'+ letterGrade +"     (" + average +"%)"+'</p>';
    }
    if(id==4){
        document.getElementById("g4").innerHTML ='<p>Assessment Grade:</p>'+'<p>'+ letterGrade +"     (" + average +"%)"+'</p>';
    }
    return average;
}

function stringToWeight(id){
    var weightInput = document.getElementById(id).value;
    weightInput = parseInt(weightInput);
    return weightInput;
}





