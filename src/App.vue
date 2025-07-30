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
    <div class="container">
      <DualListBox 
        :source="flatData"
        :destination="destination"
        :groupMode="false"
        @transfer="transfer"
      />
    </div>
</template>

<style scoped>
  .container {
    padding: 50px 30px;
    max-width: 700px;
    margin: 0 auto;
  }
</style>
