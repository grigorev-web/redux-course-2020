import './styles.css'
import {createStore} from './createStore'
import { rootReducer } from './redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');


const store = createStore(rootReducer, 0);



addBtn.addEventListener('click', ()=>{
  store.dispatch({type: 'INCREMENT'})
  
})

subBtn.addEventListener('click', ()=>{
    store.dispatch({type: 'DECREMENT'})
 
})

asyncBtn.addEventListener('click', ()=>{
    setTimeout( ()=>{
    
    }, 2000)
})

themeBtn.addEventListener('click', ()=>{
    
    //document.body.classList.toggle('dark');
})


store.subscribe( ()=>{
    const state = store.getState();
    counter.textContent = state
})