import { createStore } from 'vuex'
import number from "./state/num.state.js"
import uInfo from "./state/userinfo.state.js"
export default createStore({
  
  modules:{
    number,
    uInfo
  }
  
})
