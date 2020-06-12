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
      <div :key="index">
        <br />
        <answer
          v-if="task.taskType === 'ANSWER'"
          :task="task"
          @onAnswer="onAnswer"
        ></answer>
        <answers
          v-if="task.taskType === 'ANSWERS'"
          :task="task"
          @onAnswer="onAnswer"
        ></answers>

        <!-- <scode
        v-if="task.taskType === 'CODE'"
        :key="index"
        :task="task"
        @onAnswer="onAnswer"
      ></scode> -->
      </div>
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
      // let seconds = now.getSeconds();
      // now.setSeconds(seconds + 5);
      return now.toString();
    },
    isTimeOver: function() {
      let now = new Date();
      if (now.toString() == this.deadline) {
        return true;
      }
      return false;
    }
  },
  watch: {
    isTimeOver: async function() {
      alert("время истекло!");
      this.finishUp();
    }
  },
  created: async function() {
    let competitionId = this.$route.params.id;
    this.competition = await CompetitionsAPI.getById(competitionId);
    this.tasks = await TasksAPI.getByCompetitionId(competitionId);
    // this.participant = await this.createParticipant(this.competition.id);
  },
  methods: {
    createParticipant: async function(competitionId) {
      let newParticipant = await ParticipantApi.add(competitionId);
      return newParticipant;
    },
    onAnswer: async function(taskId, isCorrect, value) {
      this.deadline;
      debugger;

      taskId;
      isCorrect;
      this.answersMap.set(taskId, {
        isCorrect: isCorrect,
        taskId: taskId,
        option: value
      });
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
        this.answersMap;
        debugger;
      }
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
