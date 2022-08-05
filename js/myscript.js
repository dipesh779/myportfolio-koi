

function formValidate(){
    console.log('dadwad')
    const nameInput = document.querySelector('#name').value;
    const errorNodes = document.querySelectorAll('.error')
    console.log(nameInput)
    clearMessage()
    if(nameInput.length < 1){
        errorNodes[0].innerHTML = "Name cannot be blank";
    }else{
        errorNodes[0].innerHTML = "";
    }

    function clearMessage(){
        for(let i = 0; i<errorNodes.length; i++){
            errorNodes[i].innerHTML = " "
        };
        nameInput.errorNodes = ' '
    }
}

// function clearMessage(){
//     for(let i = 0; i<errorNodes.length; i++){
//         errorNodes[i].innerHTML = "";
//     }
//     nameInput.classList.remove("error-border");
// }



