import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //数组形式
    cartList: []
  },
  mutations: {
    addToCart(state, payload) {
      // oldProduct用来判断之前是否添加过商品，判断新添加的是否有存在的id
      let oldProduct = state.cartList.find((item) => {
        return item.iid === payload.iid
      })

      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1;
        //在模型里给payload添加checked属性
        payload.checked = false
        state.cartList.push(payload)
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
