const app = {
    data() {
        return {
            img: [{
                url: 'https://images.unsplash.com/photo-1512441933491-7b8cc442ed32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Preview1',
                fav: false
            },
            {
                url: 'https://images.unsplash.com/photo-1445711005973-54fe2a103826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Preview2',
                fav: false
            }
            ],
            svg :"http://www.w3.org/2000/svg"
        }
    },
    methods: {
        likeImg(index) {
            this.img[index].fav = !this.img[index].fav
        },
        preFav(index){
            this.img[index].fav= !this.img[index].fav;
        }
    },
    computed: {
        count() {
            return this.img.filter(t => !t.fav).length;
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')