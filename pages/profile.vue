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
        <template v-for="(competition, index) in userCompetitions">
          <completed-competition :key="index" :competition="competition">
          </completed-competition>
        </template>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import * as CompetitionsAPI from "~/api/competitions";
import * as ParticipantsAPI from "~/api/participants";
import CompletedCompetition from "@/components/completed_competition";

export default {
  components: {
    "completed-competition": CompletedCompetition
  },

  data() {
    return {
      name: "имя",
      surname: "имя",
      username: "логин",
      avatar: "MALE_CAUCASIAN_BLOND_BEARD",
      userCompetitions: []
    };
  },
  created: async function() {
    this.name = window.localStorage.getItem("name");
    this.surname = window.localStorage.getItem("surname");
    this.username = window.localStorage.getItem("username");
    let userId = window.localStorage.getItem("userId");
    this.userCompetitions = await this.getUserCompetitions(userId);
  },
  methods: {
    getUserCompetitions: async function(userId) {
      let userCompetitions = [];
      let completedCompetitions = await CompetitionsAPI.getCompleteds();
      for (let competition of completedCompetitions) {
        let isAllowed = await ParticipantsAPI.isAllowed(competition.id, userId);
        if (!isAllowed) userCompetitions.push(competition);
      }
      return userCompetitions;
    }
  }
};
</script>
