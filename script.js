//Created on 12-6-2023
//Lastly updated on 12-06-2023

const gridContainer=document.querySelector('.grid-container');
let count= 64;
let mode;

//Clear button 
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    mode='';
    draw.disabled=false;
    eraser.disabled=false;
    random.disabled=false;
    divCreation(count,drawing);
    gridContainer.style.backgroundColor="rgb(210, 210, 210)"
})


//Div Creation Functions
function divCreation(count,drawing){
    gridContainer.textContent=''
    for(let i=0;i<count;i++){
        for(let j=0;j<count;j++){
            const div=document.createElement('div');
            div.classList.add('grid-div');
            // div.classList.add('grid-div-border'); //If want border by default
            gridContainer.appendChild(div);
        }
    }
    gridContainer.style.cssText=`display:grid; grid-template-columns:repeat(${count},1fr)`;
    drawing()
}

//Draw button 
const draw=document.querySelector('.color');
draw.addEventListener('click',()=>{
    mode='black'
    draw.disabled=true;
    eraser.disabled=false;
    random.disabled=false;
})

//Random button 
const random=document.querySelector('.random');
random.addEventListener('click',()=>{
    mode='random'
    random.disabled=true
    eraser.disabled=false
    draw.disabled=false

})

//Erase button
const eraser=document.querySelector('.eraser');
eraser.addEventListener('click',()=>{
    mode='rgb(210, 210, 210)';
    eraser.disabled=true
    random.disabled=false
    draw.disabled=false
})

//Border button
const border=document.querySelector('.border');
border.addEventListener('click',()=>{
    const divs = document.querySelectorAll('.grid-div');
    divs.forEach((div)=>{
        div.classList.toggle('grid-div-border')
    })
    if(border.textContent=="Border"){
        border.textContent="No Border";
    }else{
        border.textContent="Border"
    }
})

//drawing function
function drawing(){
    let down=false;
        
    gridContainer.addEventListener('mousedown',()=>{
            down=true;
    })

    const divs=document.querySelectorAll('.grid-div');
    divs.forEach((div)=>{
        div.addEventListener('mousemove',(e)=>{
            if(down){
                if(mode=='random'){
                    e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
                }else{
                    e.target.style.backgroundColor=`${mode}`;
                }
            }
            
        })
    })
    document.addEventListener('mouseup',()=>{
        down=false;       
    })
}

divCreation(count,drawing);//Calling the function


//Did some random stuffs related to EventListener...///////////////

    // gridContainer.addEventListener('mousemove',(e)=>{
    //     if(down){
    //         if(mode=='random'){
    //             e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    //         }else{
    //             e.target.style.backgroundColor=`${mode}`;
    //         }
    //     }
        
    // })  
   
//////////////////////////////////////////////////////////////////



///////////This is the actual function I came up with//////////////
//
// function hovering(divCreation){
//     divCreation()
//     const divs=document.querySelectorAll('.grid-div')
//     divs.forEach((div)=>{
//         div.addEventListener('click',()=>{
//                 gridContainer.addEventListener('mouseover',(e)=>{
//                     e.target.classList.add('black')
//             })
//         })
//     })
// }
/////////////////////////////////////////////////////////////////////