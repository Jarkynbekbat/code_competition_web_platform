<template>
  <div>
    <h2>Результат соревнования id:{{ completedCompetitionId }}</h2>
    <br />
    <template v-for="(result, index) in results">
      <result :result="result" :number="index + 1" :key="index"> </result>
    </template>
    и так далее ...
  </div>
</template>

<script>
import * as ResultAPI from "~/api/result";
import result from "@/components/result";

export default {
  components: {
    result
  },
  data: function() {
    return {
      results: [],
      completedCompetitionId: 0
    };
  },
  created: async function() {
    this.completedCompetitionId = this.$route.params.id;
    this.results = await this.getResults(this.completedCompetitionId);
    debugger;
  },
  methods: {
    getResults: async function(completedCompetitionId) {
      // let results = await ResultAPI.getResultByCompletedCompetitionId(
      //   this.completedCompetitionId
      // );
      // debugger;

      return [
        {
          participantName: "jarkynbek",
          correctAnswersCount: 6,
          tasksCount: 10,
          detail: [
            {
              taskDescription: "5+5",
              participantAnswer: "11",
              correctAnswer: "10"
            },
            {
              taskDescription: "10+10",
              participantAnswer: "12",
              correctAnswer: "20"
            }
          ]
        },
        {
          participantName: "Adilet",
          correctAnswersCount: 8,
          tasksCount: 10,
          detail: [
            {
              taskDescription: "5+5",
              participantAnswer: "11",
              correctAnswer: "10"
            },
            {
              taskDescription: "10+10",
              participantAnswer: "12",
              correctAnswer: "20"
            }
          ]
        }
      ];
    }
  }
};
</script>

<style></style>
