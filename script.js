const display=document.querySelector('.display')
var btn=document.querySelectorAll('button')
btn.forEach((item)=>{
    item.onclick=()=>{
        if(item.dataset.btn==='C'){
            display.value=''
        }else if(item.dataset.btn==='CE'){
            let string=display.value;
            display.value=string.substring(0,string.length-1)
        }else if(item.dataset.btn==='='){
            display.value= eval(display.value)
        }
        
        else{
            display.value+=item.dataset.btn;
        }
   }
})

VanillaTilt.init(document.querySelector(".container"), {
    max:25,
    speed:400,
    transition:true,        
    gyroscope:   true,   
    gyroscopeMinAngleX:-45,    
    gyroscopeMaxAngleX:45,     
    gyroscopeMinAngleY:-45,    
    gyroscopeMaxAngleY:45, 
    glare:                  true,  
    "max-glare":            1,      
    "glare-prerender":      true, 
})
VanillaTilt.init(document.querySelectorAll(".button"));

