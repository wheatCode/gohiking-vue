import * as axios_ from "axios";
import store from '../../store';

const axios = axios_.create({
  baseURL: process.env.VUE_APP_BASEURL,
});

function getApi(url) {
  resetMessage();
  return axios.get(url);
}

function postApi(url, data, options) {
  resetMessage();
  return axios.post(url, data, options);
}

function putApi(url, data, options) {
  resetMessage();
  return axios.patch(url, data, options);
}

function resetMessage(){
  store.dispatch("setSuccess", '');
  store.dispatch("setError", '');
}

function getCookie(name) {
  let cookies = document.cookie;
  let list = cookies.split("; "); // 解析出名/值對列表
  for (let i = 0; i < list.length; i++) {
    let arr = list[i].split("="); // 解析出名和值
    if (arr[0] == name) return decodeURIComponent(arr[1]); // 對cookie值解碼
  }
  return "";
}

axios.interceptors.request.use(
  (confing) => {
    confing.headers["Authorization"] = "Bearer " + getCookie("gohiking_token");
    return confing;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const {status,data} = error.response;
    
    switch (status) {
      case 401:
        store.dispatch('setError',data.error);

        break;
      case 404:
        console.log(status);
        console.log(data.error);
        store.dispatch('setError',data.error);
        break;
      case 422:
        let error='';
        for (const errorI in data.errors) {
          error +=data.errors[errorI][0] +'<br>'
        }
        store.dispatch('setError',error);
        break;
      default:
        break;
    }

    // return Promise.reject(error.response);
  }
);

export default { getApi, postApi, putApi};
