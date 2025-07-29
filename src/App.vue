<script setup lang="ts">
import { ref } from 'vue';
import DualListBox from './components/DualListBox.vue';

const groupData = ref([
  {
    group: 'Group 1',
    items: [
      {
        label: 'Item 1',
        value: 1,
      },
      {
        label: 'Item 2',
        value: 2,
      },
      {
        label: 'Item 3',
        value: 3,
      }
    ],
  }
])

const flatData = ref([
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Item 3',
    value: 3,
  }
])


const destination = ref([]);

const transfer = (source: any[], destination: any[]) => {
  console.log(source, destination);
}


</script>

<template>
  <DualListBox 
    :source="groupData"
    :destination="destination"
    :groupMode="true"
    @transfer="transfer"
  />
</template>

<style scoped>

</style>
