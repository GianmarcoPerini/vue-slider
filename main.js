var app = new Vue({

    el: '#root',
    data: {
        message: 'Hello Vue!',
        images:[

            {
                url: 'img/m1.jpg',
                alt: 'Caverna nel deserto',
            },

            {
                url: 'img/m2.jpg',
                alt: 'Caverna nel deserto',
            },

            {
                url: 'img/m3.jpg',
                alt: 'Caverna nel deserto',
            },

        ],
        count: 0,
    },

    methods:{
        next: function(){
            this.count++
            if(this.count >= this.images.length) this.count = 0
            console.log(this.count);
        },
        previus: function(){
            this.count--
            if(this.count < 0) this.count = this.images.length -1
            console.log(this.count);
        },
    }
})


