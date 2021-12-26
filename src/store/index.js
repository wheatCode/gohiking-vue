import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router'
import Cookies from 'js-cookie'

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    loading:false,
    error:null,
    success:null,
    cropperImage:'https:://image.shutterstock.com/image-photo/sky-clouds-260nw-193491221.jpg',
  },
  mutations: {
    loading(state,n){
      state.loading = n;
    },
    error(state,n){
      state.error = n;
    },
    success(state,n){
      state.success = n;
    },
    cropperImage(state,n){
      state.cropperImage = n;
    },
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
      context.commit('loading',status)
    },
    setError(context,status){
      context.commit('error',status)
    },  
    setSuccess(context,status){
      context.commit('success',status)
    },
    setCropperImage(context,status){
      context.commit('cropperImage',status)
    },
  },
  modules: {
  },
});
export default store;
