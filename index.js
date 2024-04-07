const shopItem = document.querySelector('input');
const cartBtn = document.querySelector('#btn-cart');
const shoppingList = document.querySelector('#shopping-list');


//let num = document.querySelector('p');
let timer = null;
let mouseDown = new Event('mousedown');


cartBtn.addEventListener('click', function(){
    let item = shopItem.value;
    shopItem.value = '';
    shopItem.focus();

    let newItem = document.createElement('li');
    newItem.textContent = item;
    let plusButton = document.createElement('button');
    plusButton.textContent = '➕';
    plusButton.id = 'add';


    let minusButton = document.createElement('button');
    minusButton.textContent = '➖';
    minusButton.id = 'minus';

    let itemAmt = document.createElement('p');
    itemAmt.textContent = '0';
    itemAmt.id = 'item-amount';

    shoppingList.append(newItem);
    newItem.append(plusButton);
    newItem.append(itemAmt);
    newItem.append(minusButton);
    
    

    
    let itemAmount = document.querySelector('#item-amount')
    let addBtn = document.querySelectorAll('#add');
    let subBtn = document.querySelectorAll('#minus');
    // console.log(itemAmount.textContent);
    // console.log(addBtn);
    // console.log(subBtn);


    let myLists = document.querySelectorAll('li');

    for (let myList of myLists) {
        myList.addEventListener('mousedown', function addMouseDownHandler(e){
            // console.log(e);
    
            if(e.target.id === "add"){
                console.log("add button clicked");
    
                if(Number(e.target.nextElementSibling.textContent) < 20){
                    e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) + 1;
                  }else{
                    alert('Num is over 20');
                    return;
                  }
                  if(timer){
                    clearTimeout(timer);
                  }
                  timer = setTimeout(function(){
                    myList.dispatchEvent(mouseDown);
                  }, 200);
                
            }else if(e.target.id === "minus"){
                console.log("minus button clicked");
    
                if(Number(e.target.previousElementSibling.textContent) > 0){
                    e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) - 1;
                  }
                else{
                    alert('Num is less than 0');
                    return;
                }
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(function(){
                    myList.dispatchEvent(mouseDown);
                  }, 200);
            }
        })
        
        myList.addEventListener('mouseup', function(){
            clearTimeout(timer);
            // myList.removeEventListener('mousedown')
            // myList.addEventListener('mousedown')
        })
    }
    

    // for (let btn of addBtn) {
    //     clearTimeout(timer);
    //     btn.addEventListener('mousedown',addMouseDownHandler);

        

    //       btn.addEventListener('mouseup', function(){
    //         clearTimeout(timer);
    //         btn.removeEventListener('mousedown', addMouseDownHandler)
    //         btn.addEventListener('mousedown', addMouseDownHandler)
    //       })


    // }

    // function addMouseDownHandler(e){
    //     console.log(e);
    //     console.log(e.target.nextElementSibling.textContent);
    //     if(Number(e.target.nextElementSibling.textContent) < 20){
    //       itemAmount.textContent = Number(itemAmount.textContent) + 1;
    //     }else{
    //       alert('Value is over 20');
    //       return;
    //     }
    //     if(timer){
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(function(){
    //       btn.dispatchEvent(mouseDown);
    //     }, 200);
    //   }

    // subBtn.addEventListener('mousedown',subMouseDownHandler);

    

      

    //  function subMouseDownHandler(){
    //     if(Number(itemAmount.textContent) > 0){
    //         itemAmount.textContent = Number(itemAmount.textContent) - 1;
    //     }else{
    //         alert('Value is less than 0');
    //         return;
    //     }

    //     if(timer){
    //         clearTimeout(timer);
    //       }
    //       timer = setTimeout(function(){
    //         subBtn.dispatchEvent(mouseDown);
    //       }, 200);

    //  } 

    // subBtn.addEventListener('mouseup', function(){
    //     clearTimeout(timer);
    //    subBtn.removeEventListener('mousedown', subMouseDownHandler)
    //    subBtn.addEventListener('mousedown', subMouseDownHandler)
    //   })
})





