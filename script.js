function addNewWEField(){
   // console.log("adding")

   let newNode= document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('weField');
   newNode.classList.add('mt-2');
   newNode.setAttribute('rows',3);
   newNode.setAttribute("placeholder" ,"Enter here..");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAQField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute("placeholder" ,"Enter here..");
 
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv

function generateCV(){
    let nameField = document.getElementById("nameField").value ; //value of nameField will be given to variable nameField
    let nameT = document.getElementById("nameT"); // object nameT will be given to variable nameT

    nameT.innerHTML= nameField;
//direct
    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;// contactField value will be set in innerHTMl of contactT

    document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;

    document.getElementById("linkedT").innerHTML = document.getElementById('linkedinField').value;

    document.getElementById("instaT").innerHTML = document.getElementById('instaField').value;

    document.getElementById("fbT").innerHTML = document.getElementById('fbField').value;

    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById('objectiveField').value;
    


    //we

    let wes = document.getElementsByClassName('weField');

    let str= '';

    for(let e of wes){
        str = str + `<li>${e.value} </li>`
    }
    document.getElementById("weT").innerHTML = str;


    //aq

    let aqs = document.getElementsByClassName('aqField');

    let strr= '';

    for(let e of aqs){
        strr += `<li>${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = strr;

    //code for setting image

    let file= document.getElementById('imgField').files[0];
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template
    reader.onloadend = function(){
    document.getElementById('imgTemplate').src = reader.result;
    };


    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-template').style.display = "block";

}

//print CV
function printCV(){
    window.print();
}