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

    <div class="mt-4">
      <div v-if="selectedTabs === 0">
        Contenu du Dashboard
      </div>
      <div v-else-if="selectedTabs === 1">
        Contenu de About
      </div>
    </div>
  </div>
</template>

<style scoped></style>