<template>
  <div>
    <center>
      <h2>{{ competition.name }}</h2>

      <flip-countdown
        :deadline="deadline"
        :showDays="false"
        :labels="labels"
      ></flip-countdown>
    </center>
    <template v-for="(task, index) in tasks">
      <br :key="index + 1" />
      <answer
        v-if="task.taskType === 'ANSWER'"
        :key="index"
        :task="task"
      ></answer>
      <answers
        v-if="task.taskType === 'ANSWERS'"
        :key="index"
        :task="task"
      ></answers>
      <scode v-if="task.taskType === 'CODE'" :key="index" :task="task"></scode>
    </template>
  </div>
</template>

<script>
import * as CompetitionsAPI from "@/api/competitions";
import * as TasksAPI from "@/api/tasks";

import answer from "~/components/participant/answer";
import answers from "~/components/participant/answers";
import scode from "~/components/participant/scode";

import FlipCountdown from "vue2-flip-countdown";

export default {
  components: {
    answer,
    answers,
    scode,
    "flip-countdown": FlipCountdown
  },

  data: function() {
    return {
      labels: {
        hours: "часов",
        minutes: "минут",
        seconds: "секунд"
      },
      tasks: [],
      competition: {},
      userId: 0
    };
  },
  computed: {
    deadline: function() {
      let now = new Date();
      let hours = now.getHours();
      now.setHours(hours + 3);
      return now.toString();
    }
  },
  created: async function() {
    let competitionId = this.$route.params.id;
    this.competition = await CompetitionsAPI.getById(competitionId);
    this.tasks = await TasksAPI.getByCompetitionId(competitionId);
    //     debugger;
  }
};
</script>

<style></style>
