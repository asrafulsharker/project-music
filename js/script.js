window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors =[
        "#60d396",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#60d369",
        "#ff0000"
    ];
   
    
    // lets get going with the sound here
    
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
        });
    });
    
    
    // create a functtion to make buble
    const createBubbles = () =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ese';
    };
});
