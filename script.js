const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  });

// Get the button, and when the user clicks on it, execute myFunction
//document.getElementById("hello").onclick = ()=> {animateCSS('.ppp', 'flash');};

const button_action = (id,cls,style)=>{
document.getElementById(id).onclick = ()=> {animateCSS(cls, style);};
}



animateCSS('.cprogramming','bounce')
animateCSS('.cprogramming','repeat-3')

button_action('runing','.cprogramming','flash')

button_action('runing2','.android','flip')
button_action('runing3','.github','wobble')
button_action('runing4','.angular','swing')
button_action('runing5','.html','backInLeft')
button_action('runing6','.css','zoomIn')
button_action('runing7','.atom','hinge')
button_action('runing8','.codeigniter','rollIn')
button_action('runing9','.cpp','rollOut')
button_action('runing10','.python','lightSpeedInLeft')
button_action('runing11','.google','fadeOutTopLeft')
button_action('runing12','.django','fadeOutTopRight')

//button_action('runing2','.github','repeat-3')