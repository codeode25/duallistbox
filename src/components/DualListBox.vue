<script lang="ts" setup>
import { ref } from 'vue';

import ListBox from './ListBox.vue';
import TransferControls from './TransferControls.vue';

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
    <div class="duallistbox">
        <ListBox :list="source" :groupMode="groupMode"/>
        <TransferControls />
        <ListBox :list="destination" :groupMode="groupMode"/>
    </div>
</template>

<style scoped>
    .duallistbox {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    @media screen  and (min-width: 48rem){
        .duallistbox {
            flex-direction: row;
        }
    }
</style>