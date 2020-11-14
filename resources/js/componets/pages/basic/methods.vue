<template>
    <div>
        <h1>The number is:  {{counter}}</h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br><br><br>

        <div v-for="(blog, i) in blogs" :key='i'>
            <h1>{{i+1+' - '+blog.title}}</h1>
            <p>{{blog.post}}</p>
        </div>

        <br>
        <br>
        <br>

        <div>
            <h1 v-if="showItem">Show item is true</h1>
            <h1 v-else>Show item is false</h1>
        </div>


        <button @click="showItem=!showItem">Change Show Item</button>

    </div>
</template>

<script>
export default {
    data(){
        return {
            //let, counter is initiate 0 when vue creted
            counter: 0,
            blogs: [],
            showItem: false,
        }
    },
    methods:{
        updateCounter(value){
            this.counter +=value;
        }
    },
    
    created(){
        //we call server here and update the value of counter
        this.counter = 100;

        let posts = [
            {title: 'This blog title', 'post': 'This is blog body', id: 1},
            {title: 'This blog title', 'post': 'This is blog body', id: 2},
            {title: 'This blog title', 'post': 'This is blog body', id: 3},
            {title: 'This blog title', 'post': 'This is blog body', id: 4},

        ]

        this.blogs = posts;
    }
}
</script>