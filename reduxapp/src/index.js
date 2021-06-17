import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    case 'RES':
      return state = 0;

    default:
      return state; 
  }
}

const store = createStore(reducer);

const inc = () => {
  return {
    type: 'INC'
  }
}

const dec = () => {
  return {
    type: 'DEC'
  }
}

const res = () => {
  return {
    type: 'RES'
  }
}

document.querySelector('.btn_item:first-of-type').addEventListener('click', () => {
  store.dispatch(inc());
})

document.querySelector('.btn_item:nth-of-type(2)').addEventListener('click', () => {
  store.dispatch(dec());
})

document.querySelector('.btn_item:last-of-type').addEventListener('click', () => {
  store.dispatch(res());
})

const update = () => {
  document.querySelector('.number_block').textContent = store.getState();
}

store.subscribe(() => {
  update();
})

/* 



const rnd = () => {
  const value = Math.floor(Math.random() * 10);

  return {
    type: 'RND',
    value
  }
}

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', () => {
  store.dispatch(rnd());
})

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(() => {
  update();
}) */

/* store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

let state = reducer(undefined, {});

state = reducer(state, {type: 'INC'});
console.log(state);
state = reducer(state, {type: 'INC'});
console.log(state);
 */