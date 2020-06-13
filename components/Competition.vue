<template>
  <v-container>
    <v-layout row wrap>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <v-card-title class="headline" v-text="item.name"></v-card-title>
          <v-card-subtitle>
            <!-- начало: {{ new Date(item.start_date).toLocaleDateString("ru-RU") }} -->
            <!-- <br /> -->
            дедлайн: {{ new Date(item.end_date).toLocaleDateString("ru-RU") }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text @click="takePart(item.id)"> Принять участие</v-btn>
            <v-btn text :to="'/competition/' + item.id">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import * as CompetitionApi from "../api/competitions";
import * as ParticipantApi from "../api/participants";

export default {
  props: ["subjectId"],
  data: () => ({
    items: []
  }),
  created: async function() {
    this.items = await CompetitionApi.getActivesBySubjectId(this.subjectId);
  },
  methods: {
    takePart: async function(competitionId) {
      competitionId;
      let isSure = confirm(
        "Работа над задачами начнется сразу, вы уверены что хотите начать сейчас ?"
      );
      if (isSure) {
        let userId = window.localStorage.getItem("userId");
        let isAllowed = await this.isItFirstTime(userId, competitionId);
        debugger;
        if (isAllowed) this.$router.push("/participant/" + competitionId);
        else {
          alert("Вы уже поучавствовали в данном соревновании");
          this.$router.push("/result/" + competitionId);
        }
      }
    },
    isItFirstTime: async function(userId, competitionId) {
      let isAllowed = await ParticipantApi.isAllowed(competitionId, userId);
      return isAllowed;
    }
  }
};
</script>
