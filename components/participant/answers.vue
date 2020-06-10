<template>
  <v-card class="mx-auto">
    <v-card-title>
      {{ task.description }}
    </v-card-title>
    <v-card-text>
      <v-radio-group v-model="selectedOption" @change="onSelect()">
        <v-radio
          v-for="(option, index) in options"
          :key="index"
          :label="option.option"
          :value="option.id"
        ></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>
<script>
import * as OptionsAPI from "../../api/options";
export default {
  props: ["task"],
  data: function() {
    return {
      answer: "",
      options: [],
      selectedOption: 0
    };
  },
  created: async function() {
    this.options = await this.getOptions();
  },
  methods: {
    getOptions: async function() {
      return await OptionsAPI.getByTaskId(this.task.id);
    },
    onSelect: function() {
      this.selectedOption;
      debugger;
    }
  }
};
</script>

<style></style>
