let selection = document.querySelector('select');
let result = document.querySelector('label');
let msg = document.querySelector('h3');
let imgD = document.getElementById('pizImg');
let withI = document.getElementById('with');
let cartCount = document.getElementById('item_count');
var count = 1;

selection.addEventListener('change',()=>{
    msg.innerText = "Great Choice 👍\n";
    result.innerText = selection.options[selection.selectedIndex].value;
    if(selection.selectedIndex==0){
        imgD.src = "images/pizza.png";
    }
    else if(selection.selectedIndex==1){
        imgD.src = "images/pizza1.png";
    }
    else if(selection.selectedIndex==2){
        imgD.src = "images/pizza2.png";
    }
    else if(selection.selectedIndex==3){
        imgD.src = "images/pizza3.png";
    }
    else if(selection.selectedIndex==4){
        imgD.src = "images/pizza4.png";
    }
});

function addtoCart()
{
    count += 1;
    cartCount.innerText = count;
}

function rmCart()
{
    count -= 1;
    if(count>0){
        cartCount.innerText = count;
    }
    else{
        count = 0;
        cartCount.innerText = count;
    }
}
function disp()
{
    window.alert("Development Ongoing 😊 !");
}