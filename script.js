import { init } from 'ityped'

const oneElement = document.querySelector('#one')
const otherElement = document.querySelector('#other')

init(oneElement, { showCursor: false, strings: ['Nice', 'One' ] });
init(otherElement, { disableBackTyping: true, strings: ['iTyped is', 'Awesome'] });