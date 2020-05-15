<template>
  <v-card
    class="mx-auto"
    width="1000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"> <v-textarea outlined="true" height="1" v-model="title"></v-textarea></v-list-item-title>
        <v-list-item-subtitle><v-textarea outlined="true" height="300" v-model="body"></v-textarea></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn @click="AddPost()">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            body: ''
        }
    },
    methods:{
        AddPost(){
            let post = {
                title: this.title,
                body: this.body,
                id: 100,
                userId: 0,
            }
            this.$store.dispatch('AddPost', post);
        }
    }
}
</script>