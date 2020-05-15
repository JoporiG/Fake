<template>
    <div>
        <posts v-for="post in posts" :key="post.id"
        :title="post.title"
        :body="post.body"/>
    </div>
</template>


<script>
import posts from '~/components/posts.vue'
export default {
    data(){
        return {
            posts: []
        }
    },
    methods:{
        LoadPosts(){
            this.$axios.get("http://jsonplaceholder.typicode.com/posts").then(response=>{
                this.$store.dispatch('setPosts', response.data);
                this.posts = this.$store.getters.getPosts;
                console.log(this.posts);
            })
        }
    },
    mounted(){
        this.LoadPosts()
    },
    components:{
        posts,
    }
};
</script>

