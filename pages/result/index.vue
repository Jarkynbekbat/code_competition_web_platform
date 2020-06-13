<template>
  <div>
    <center><h2>Cписок завершенных соревнований</h2></center>
    <br />
    <template v-for="(competition, index) in completedCompetitions">
      <completed-competition :key="index" :competition="competition">
      </completed-competition>
    </template>
  </div>
</template>

<script>
import * as CompetitionsAPI from "~/api/competitions";
import CompletedCompetition from "@/components/completed_competition";

export default {
  components: {
    "completed-competition": CompletedCompetition
  },
  data: function() {
    return {
      completedCompetitions: []
    };
  },
  created: async function() {
    this.completedCompetitions = await CompetitionsAPI.getCompleteds();
  }
};
</script>

<style></style>
