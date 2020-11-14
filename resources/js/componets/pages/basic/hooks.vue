<template>
    <div>
        <h1 ref="myref">This is hook page</h1>
        <h2>My name is: {{name}}</h2>
    </div>
</template>

<script>
export default {
    //this data can be accesable for only inside this file
    data(){
        return{
            name: 'Maruf'
        }
    },
    created(){
        //call mosty intial data from here
        console.log("Data property are avaialbe but html is not", this.name);

    },
    beforeCreate(){

    },
    mounted(){
        //mounted is created when html is rendered or avialable
        console.log(this.$refs.myref)
    }
}
</script>