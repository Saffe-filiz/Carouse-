var app = new Vue({
  el: '.container',

  data: {
    image_width: 0,
    total_width: 0,
    total_length: 0,
    current_box: 0,
  },

mounted () {
    this.carousel();
  },
  

  methods : {
      carousel () {
        let x = this.$refs;
        this.total_length = x.li.children.length;
        this.image_width = x.li.children[0].clientWidth;
        this.total_width = x.li.children[0].clientWidth * this.total_length;
    },
   },

   computed: {
      next_box () {
          let next = 0;
          let current_box = this.current_box
          let total_length = this.total_length
      
      if(current_box < total_length){
        next = current_box * -290
      }
      return next + 'px'
      }
   }


});
