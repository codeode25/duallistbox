<script lang="ts" setup>
import { ref } from 'vue';


const props = defineProps(['source', 'destination', 'groupMode']);
const emit = defineEmits(['transfer']);

const source = ref(initItems(props.source, props.groupMode));
const destination = ref(initItems(props.destination, props.groupMode));

function initItems(items: any[], groupMode: boolean) {
    return items.map((item) => {
        if (groupMode) {
            item.items = item.items.map((it) => ({...it, selected: false}));
        } else {
            item = {...item, selected: false};
        }

        return item;
    })
}

</script>

<template>

</template>