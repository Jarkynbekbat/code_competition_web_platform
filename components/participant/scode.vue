<template>
  <v-card>
    <v-card-title>
      {{ task.description }}
    </v-card-title>
    <v-card-subtitle>
      вставьте исходный код сюда <br />
      поддерживаемые языки : java (список будет расширяться)
    </v-card-subtitle>

    <v-card-text>
      <editor
        ref="myEditor"
        v-model="content"
        @init="editorInit"
        lang="java"
        theme="dracula"
        height="300"
      ></editor>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {
    editor: require("vue2-ace-editor")
  },
  props: ["task"],
  data: function() {
    return {
      content: `public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=25;
      int z=x+y;

      System.out.println("Sum of x+y = " + z);
    }
}`
    };
  },
  created: async function() {},
  methods: {
    editorInit: function(editor) {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/java"); //language
      require("brace/mode/less");
      // require("brace/theme/chrome");
      require("brace/theme/dracula");
      require("brace/snippets/javascript"); //snippet
    }
  }
};
</script>

<style></style>
