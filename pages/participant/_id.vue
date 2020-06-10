<template>
  <div>
    <center>
      <h2>{{ competition.name }}</h2>
    </center>
    <template v-for="(task, index) in tasks">
      <br :key="index" />

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

export default {
  components: {
    answer,
    answers,
    scode
  },

  data: function() {
    return {
      tasks: [
        {
          taskType: "ANSWER"
        }
      ],
      competition: {},
      userId: 0
    };
  },
  created: async function() {
    let competitionId = this.$route.params.id;
    this.competition = await CompetitionsAPI.getById(competitionId);
    this.tasks = await TasksAPI.getByCompetitionId(competitionId);
    debugger;
  }
};
</script>

<style></style>
