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

const toggleSelectAll = (selectAll: boolean, list: any) => {
    if (props.groupMode) {
        list.value.forEach((groupItem) => {
            groupItem.items.forEach((item) => item.selected = selectAll);
        })
    } else {
        list.value.forEach((item) => item.selected = selectAll);
    }
}

const toggleSelectAllSource = (selectAll: boolean) => {
    toggleSelectAll(selectAll, source);
}

const toggleSelectAllDestination = (selectAll: boolean) => {
    toggleSelectAll(selectAll, destination)
}

</script>

<template>
    <div class="duallistbox">
        <ListBox :list="source" :groupMode="groupMode"  @toggle-select-all="toggleSelectAllSource"/>
        <TransferControls />
        <ListBox :list="destination" :groupMode="groupMode"  @toggle-select-all="toggleSelectAllDestination"/>
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