import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router'
import Cookies from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading:false
  },
  mutations: {
    Loading(state,n){
      state.loading = n;
    }
  },
  actions: {
    toPrevRouter(){
      // if(Cookies.get("prevUrl")){
      //   const prevUrl = Cookies.get("prevUrl");
      //   console.log(prevUrl);
      //   router.push({ path: prevUrl });
      //   Cookies.remove("prevUrl");
      // }else{
        router.go(-1);
      // }
    },
    loadingPage(context,status){
      context.commit('Loading',status)
    }
  },
  modules: {
  },
});
