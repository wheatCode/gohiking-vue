import * as axios_ from "axios";

const axios = axios_.create({
  baseURL: process.env.VUE_APP_BASEURL,
});

function getApi(url) {
  return axios.get(url);
}

function postApi(url, data, options) {
  return axios.post(url, data, options);
}

function putApi(url, data, options) {
  return axios.patch(url, data, options);
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
        console.log(status);
        console.log(data.error);
        break;
      case 404:
        console.log(status);
        console.log(data.error);
        break;
      case 422:
        console.log(status);
        for (const errorI in data.errors) {
          console.log(errorI, data.errors[errorI]);
        }
        break;
      default:
        break;
    }

    // return Promise.reject(error.response);
  }
);

export default { getApi, postApi, putApi};
