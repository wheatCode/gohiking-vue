import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/components/Index.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("@/components/Register.vue"),
  },
  {
    path: "/BasicInformation",
    name: "BasicInformation",
    component: () => import("@/components/BasicInformation.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    meta: { requireAuth: false }, 
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/EmailLogin",
    name: "EmailLogin",
    meta: { requireAuth: false }, 
    component: () => import("@/components/EmailLogin.vue"),
  },
  {
    path: "/ForgetPwd",
    name: "ForgetPwd",
    component: () => import("@/components/ForgetPwd.vue"),
  },
  {
    path: "/Verification",
    name: "Verification",
    component: () => import("@/components/Verification.vue"),
  },
  {
    path: "/ResetPwd",
    name: "ResetPwd",
    component: () => import("@/components/ResetPwd.vue"),
  },
  {
    path: "/Aboutus",
    name: "Aboutus",
    component: () => import("@/components/Aboutus.vue"),
  },
  {
    path: "/Privacy",
    name: "Privacy",
    component: () => import("@/components/Privacy.vue"),
  },
  {
    path: "/PersonalFile",
    name: "PersonalFile",
    meta: { requireAuth: true }, 
    component: () => import("@/components/PersonalFile.vue"),
  },
  {
    path: "/Collect",
    name: "Collect",
    meta: { requireAuth: true }, 
    component: () => import("@/components/Collect.vue"),
  },
  {
    path: "/NearbyTrails",
    name: "NearbyTrails",
    meta: { requireAuth: true }, 
    component: () => import("@/components/NearbyTrails.vue"),
  },
  {
    path: "/SearchTrail",
    name: "SearchTrail",
    meta: { requireAuth: true }, 
    component: () => import("@/components/SearchTrail.vue"),
  },
  {
    path: "/SearchResult",
    name: "SearchResult",
    meta: { requireAuth: true }, 
    component: () => import("@/components/SearchResult.vue"),
  },  
  {
    path: "/QuickSearch/:id",
    name: "QuickSearch",
    meta: { requireAuth: true }, 
    component: () => import("@/components/QuickSearch.vue"),
  },
  {
    path: "/Article/:id",
    name: "Article",
    meta: { requireAuth: true }, 
    component: () => import("@/components/Article.vue"),
  }, 
  {
    path: "/NearbyAttractions",
    name: "NearbyAttractions",
    meta: { requireAuth: true }, 
    component: () => import("@/components/NearbyAttractions.vue"),
  },
  {
    path: "/TrailInTroduction/:id",
    name: "TrailInTroduction",
    meta: { requireAuth: true }, 
    component: () => import("@/components/TrailInTroduction.vue"),
  },
  {
    path: "/CommentTrail/:id",
    name: "CommentTrail",
    meta: { requireAuth: true }, 
    component: () => import("@/components/CommentTrail.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async(to, from, next) => {
  console.log(to,from);
  if (to.meta.requireAuth) {
    const token = Cookies.get('gohiking_token')
    if (token) {
      next();
    } else {
      next({ name: 'Login' });
      // Cookies.set('nextUrl',to.fullPath);
      // Cookies.set('prevUrl',from.fullPath);
    }
  } else {
    // if(Cookies.get('nextUrl') && to.name != 'EmailLogin'){
    // const nextUrl = Cookies.get('nextUrl')
    // next({ path: nextUrl});
    // Cookies.remove('nextUrl') ;
    // }else{
      next();
    // }
  }
})


export default router;
