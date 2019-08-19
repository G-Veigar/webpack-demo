import {add} from './add'
import './style/base.css'
import loveHK from './img/hk.jpeg'

console.log(add(2, 3))

import('./hehe').then(data => {
    console.log(data)
})

document.getElementById('app').innerText = loveHK