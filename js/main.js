  // import components
  // exactly like php include

import LoginComponent from '../js/modules/LoginComponent.js';

const routes = [
  { path: '/', redirect: {name: "login"} },
  {path: '/login', name: 'login', component: LoginComponent},
];

const router = new VueRouter({
  routes 
});

  // then your vue instance
  const vm = new Vue({
    data: {
      testmessage: "sup",

      authenticated: false,

      mockAccount: {
        username: "SSL",
        password: "password"
      }
    },

    methods: {
      calledOnParent(){
        console.log("This method lives in the main VM and was called from a component");
      },

      created: function() {
        console.log("This is the main vue instance")
    }
  },

    router: router
  }).$mount("#app");


router.beforeEach((to, from, next) => {
  console.log('router guard fired!', vm.authenticated);

  if (vm.authenticated == false) {
    next("/login");
     }else {
       next();
     }
});

