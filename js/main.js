(() => {
  // create a component first
const UserComponent = {
  props: ['name', 'role'],

  template: "#userstemplate",

  created: function() {
    console.log("I'm aliiiiiiiive!");
  },

  methods {
    logFromChild() {
      console.log("Logged from the component");
    }
  }
}

  // then your vue instance
  const vm = new Vue({
    el: "#app",

    data: {
      testmessage: "sup"
    },

    methods: {

    },
created: function() {
  console.log("This is the main vue instance")
},
    components: {
      'activeusers' : UserComponent
    }
  })

})();
