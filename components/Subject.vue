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
    data: () => ({
      items: [
        {
          id: '1',
          name: 'Math'
        },
        {
          id: '2',
          name: 'IT'
        },
        {
          id: '3',
          name: 'Physics'
        },
      ],
    }),

  }
</script>