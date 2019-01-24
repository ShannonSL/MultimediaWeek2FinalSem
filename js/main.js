(() => {
  // create a component first
const HomePageComponent = {
  template: "<h2>This is the home page</h2>"
};

const UsersPageComponent = {
  props: ['id'], //this.id
  template: "#userList",

//encapsulate or isolate all component data
  data: function(){
    return {
      users: []
    }
  },

  created: function() {
    console.log('user component created!');

    //take the query perameter from the route and pass it to the fetchUserData methods

    this.fetchUserData(this.id);
  },

  methods: {
    fetchUserData(user) {
      debugger;

      let url = `./includes/index.php?users=${this.id}`;

      fetch(url)
      .then(res => res.json())
      .then(data => this.users = data)
      .catch(function(error) {
        console.error(error);
      });
    }
  }
};

const ContactPageComponent = {
  template: "<h2>This is the contact page</h2>"
};

const ErrorPageComponent = {
  template: "<h2>Page not found! Try again...</h2>"
};
//routes are the path you're taking through the application
//www.google.ca is a route; it's the route to the home page
// www.sumpinsumpin/contact is the route to the contact page, etc.
// each route gets mapped to a component that you define
// and that component gets rendered in the <router-view> element
const routes = [
  { path: '/', name: 'home', component: HomePageComponent },
  {path: '/user/:id', name: 'users', component: UsersPageComponent, props: true },
  { path: '/contact', name: 'contact', component: ContactPageComponent }
]

const router = new VueRouter({
  routes
});

  // then your vue instance
  const vm = new Vue({
    el: "#app",

    data: {
      testmessage: "sup"
    },
    created: function() {
      console.log('parent is live');
    },

    methods: {
      logParent(){
        console.log("from the parent". message);
      },

      logMainMessage(message) {
        console.log("called from inside a child, lives in the parent", message);
      }
    },

created: function() {
  console.log("This is the main vue instance")
},

    components: {
      'HomePageComponent' : HomePageComponent,
      'UsersPageComponent' : UsersPageComponent,
      'ContactPageComponent' : ContactPageComponent
    },

    router: router
  });

})();
