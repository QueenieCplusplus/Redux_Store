// to init a store instance 
// and to pass store in all apps components by calling Provide as wrapper of store

import { createStore } from 'redux';
import App from 'App';

const initialState = {
  s: 'hi u c me'
}

// actions -------------------------------------------------------------------------
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest } //解構，判斷狀態是否改變過後，
    default:
      return state // 原本（初始化）狀態
  }
}

// createStore(actions)
const store = createStore(changeState)

//透過store.connect() 將 App 元件接到 Provider 的 context 來獲取狀態。-------------------
// Dispatchers
const mapStateToProps = state => ({})
const mapDispatchToProps = {}

// connect(Dispatchers...)
const ConnectTodos = store.connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default store