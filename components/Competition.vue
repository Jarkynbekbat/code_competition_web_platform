<template>
 <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card >
          <v-container fluid>
               <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          
        >
            <v-card
                :color="item.color"
                dark
            >
                <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title
                    class="headline"
                    v-text="item.name"
                    ></v-card-title>

                    <v-card-subtitle v-text="'Дата от : ' + item.start_date + ' - до : ' + item.end_date"></v-card-subtitle>

                </div>

                </div>
            </v-card>
            </v-col>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    props: {
      id: {
        required: true
      }
    },
    data: () => ({
      items: [
        {
          "end_date": "2020-06-09",
          "id": 0,
          "name": "National olymp in Kyrgyzstan",
          "start_date": "2020-06-10",
          "subjectId": 0,
          "subjectName": "IT",
          "userId": 0,
          "userName": "string",
          "userSurname": "string"
        },
        {
          "end_date": "2020-06-09",
          "id": 0,
          "name": "National olymp in Kazakstan",
          "start_date": "2020-06-10",
          "subjectId": 0,
          "subjectName": "IT",
          "userId": 0,
          "userName": "string",
          "userSurname": "string"
        },
      ],
    }),
  }
</script>