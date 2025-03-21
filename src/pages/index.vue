<script setup lang="ts">
// Importations
import { ref, watch, onMounted } from 'vue';
import useGroupApps from '../functions/useGroupApps.ts'

// Variables
let selectedTabs = ref(0);
const links = ref(["Dashboard", "About"]);
let apiResult = ref(0);
let groupedData = ref([]);

// Vue func
watch(apiResult, (newValue) => {
  groupedData.value = useGroupApps(newValue.data);
});

//API
const fetchMonetizationApi = async () => {
  try {
    const response = await fetch('https://www.anthony-cardinale.fr/_placeholder/monetization-api.json');

    if (!response.ok) {
      throw new Error('Erreur lors du chargement de l’API distante');
    }

    const data = await response.json();

    if (!data || data === 0 || data.error) {
      console.warn('Les données de l’API sont invalides, chargement des données locales...');
      throw new Error('Données API invalides');
    }

    apiResult.value = data;
  } catch (error) {
    console.error('Échec du chargement de l’API distante, chargement des données locales...', error);

    try {
      const localResponse = await fetch('/data/monetization-api.json');

      if (!localResponse.ok) {
        throw new Error('Erreur lors du chargement des données locales');
      }

      const localData = await localResponse.json();
      apiResult.value = localData;
    } catch (localError) {
      console.error('Échec du chargement des données locales', localError);
    }
  }
};

//version locale uniquement
/*const fetchMonetizationApi = async () => {
  try {
    // Charger directement les données locales
    const localResponse = await fetch('/data/monetization-api.json');

    if (!localResponse.ok) {
      throw new Error('Erreur lors du chargement des données locales');
    }

    const localData = await localResponse.json();
    apiResult.value = localData;
  } catch (error) {
    console.error('Échec du chargement des données locales', error);
  }
};
*/


// lifecycle
onMounted(async () => { fetchMonetizationApi(); })
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
            <v-sheet v-if="selectedTabs == 0" min-height="70vh" rounded="lg" class="pa-4">
              <h2 class="mt-4">App lists :</h2>
              <v-data-table v-if="groupedData" :items="groupedData"></v-data-table>
            </v-sheet>
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