<template>
  <div>
    <h2>Результат</h2>
    <br />
    <template v-for="(result, index) in results">
      <result :result="result" :number="index + 1" :key="index"> </result>
    </template>
  </div>
</template>

<script>
import * as ResultAPI from "~/api/result";
import * as CompetitionsAPI from "~/api/competitions";
import result from "@/components/result";

export default {
  components: {
    result
  },
  data: function() {
    return {
      results: [],
      competitionId: 0
    };
  },
  created: async function() {
    this.competitionId = this.$route.params.id;
    let isCompleted = await CompetitionsAPI.isCompleted(this.competitionId);
    if (isCompleted) {
      this.results = await this.getResults(this.competitionId);
    } else {
      let userId = window.localStorage.getItem("userId");
      this.results = await ResultAPI.getResultByUserAndCompetitionIds(
        userId,
        this.competitionId
      );
    }
  },
  methods: {
    getResults: async function(competitionId) {
      let results = await ResultAPI.getResultByCompetitionId(
        this.competitionId
      );
      return results;
    }
  }
};
</script>

<style></style>
