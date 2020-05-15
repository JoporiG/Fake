export const state = () => ({
    posts: [],
})

export const mutations = {
    setPosts(state, obj) {
        state.posts = obj;
        console.log("LOADED");
    },
    AddPost(state, obj){
        state.posts.push(obj);
        console.log("ADDED");
    }
}

export const actions = {
    setPosts(ctx, obj) {
        ctx.commit('setPosts', obj);
    },
    AddPost(ctx, obj){
        ctx.commit('AddPost', obj);
    }
}

export const getters = {
    getPosts: function (state) { return state.posts },
}
