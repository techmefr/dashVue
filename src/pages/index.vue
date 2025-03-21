<script setup lang="ts">
// Importations
import { ref } from 'vue';

// Variables
let selectedTabs = ref(0);
const links = ref(["Dashboard", "About"]);
</script>

<template>
  <div>
    <v-app-bar class="px-3" color="grey-darken-4" flat density="compact">
      <v-spacer></v-spacer>
      <v-tabs v-model="selectedTabs" centered color="grey-darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <!--Left Col-->
          <v-col col="12" sm="2"></v-col>
          <!--Left Col-->
          <v-col col="12" sm="8">
            <v-sheet v-if="selectedTabs == 0" min-height="70vh" rounded="lg" class="pa-4">Page 0</v-sheet>
            <v-sheet v-else min-height="70vh" rounded="lg" class="pa-2 pt-4">Page 1</v-sheet>
          </v-col>
          <!--Left Col-->
          <v-col col="12" sm="2"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<style scoped></style>