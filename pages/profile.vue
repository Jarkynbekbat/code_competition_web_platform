<template>
  <v-container fluid>
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
    <br />
    <v-card>
      <v-card-title>
        Список соревнований в которых вы учавствовали
      </v-card-title>
      <v-card-text>
        <nuxt-link to="/result/1">competition id 1</nuxt-link> <br />
        <nuxt-link to="/result/2">competition id 2</nuxt-link><br />
        <nuxt-link to="/result/3">competition id 3</nuxt-link><br />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},

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
