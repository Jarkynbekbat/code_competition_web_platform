<template>
  <v-container fluid>
    <answer></answer>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4">
            <v-avatar size="96" class="mr-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJaBifR3vaLnaThPnmGIuRCDhjGtdQA66z9KElRdECzeiWyGuO&usqp=CAU"
                alt="Avatar"
              />
            </v-avatar>
          </v-flex>
          <v-text-field v-model="name" label="Имя" disabled></v-text-field>
          <v-text-field
            v-model="surname"
            label="Фамилия"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="username"
            label="Никнейм"
            disabled
          ></v-text-field>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import answer from "~/components/participant/answer";

export default {
  components: {
    answer
  },

  data() {
    return {
      loading: false,
      name: "имя",
      surname: "имя",
      username: "логин",
      avatar: "MALE_CAUCASIAN_BLOND_BEARD"
    };
  },
  created: function() {
    this.name = window.localStorage.getItem("name");
    this.surname = window.localStorage.getItem("surname");
    this.username = window.localStorage.getItem("username");
  },
  methods: {}
};
</script>
