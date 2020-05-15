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
                let validPosts = this.posts.filter((elem)=>{
                    if(elem.userId == this.$route.params.id)
                        return true;
                    return false;
                })
                this.posts = validPosts;
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