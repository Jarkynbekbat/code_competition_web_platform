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
        @onAnswer="onAnswer"
      ></answer>
      <answers
        v-if="task.taskType === 'ANSWERS'"
        :key="index"
        :task="task"
        @onAnswer="onAnswer"
      ></answers>
      <scode
        v-if="task.taskType === 'CODE'"
        :key="index"
        :task="task"
        @onAnswer="onAnswer"
      ></scode>
    </template>
    <br />
    <br />
    <br />
    <v-btn block color="primary" @click="finishUp">Завершить работу</v-btn>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import * as CompetitionsAPI from "@/api/competitions";
import * as ParticipantApi from "@/api/participants";
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
      tasks: [
        {
          data: "no data"
        }
      ],
      competition: {},
      participant: {},
      answersMap: new Map(),
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
    this.createParticipant();
  },
  methods: {
    createParticipant: async function() {
      let competitionId = this.competition.id;
      let newParticipant = await ParticipantApi.add(competitionId);
      this.participant = newParticipant;
    },
    onAnswer: async function(taskId, isCorrect) {
      taskId;
      isCorrect;
      this.answersMap.set(taskId, isCorrect);
      // TODO create participantAnswer
      this.answersMap;
      debugger;
    },
    finishUp: async function() {
      let isSure = confirm("Вы уверены что хотите завершить работу?");
      if (isSure) {
        let userId = window.localStorage.getItem("userId");
        this.competition.id;
        this.participant.id;
      }
    }
  }
};
</script>

<style></style>
