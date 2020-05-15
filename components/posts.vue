<template>
<v-container fluid>
    <v-layout row wrap>
        <v-col cols="6">
            <v-card width="1000" height="250" fluid>
                <v-card-title><h2>{{title}}</h2></v-card-title>
                <v-card-text><p>{{body}}</p></v-card-text>
            </v-card>
        </v-col>
    </v-layout>
</v-container>
</template>

<script>
export default {
    props:['title', 'body']
}
</script>


