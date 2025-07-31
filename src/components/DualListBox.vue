<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import ListBox from './ListBox.vue';
import TransferControls from './TransferControls.vue';
import type { DualListGroupItem, DualListItem } from '../types';

type Props = | {
    source: DualListGroupItem[],
    destination: DualListGroupItem[],
    groupMode: true
} | {
    source: DualListItem[],
    destination: DualListItem[],
    groupMode: false
}

const props = defineProps<Props>();
const emit = defineEmits(['transfer']);

const source = ref(initItems(props.source));
const destination = ref(initItems(props.destination));

function initItems(items: (DualListGroupItem | DualListItem)[], withSelected: boolean = true) {
    return items.map((item) => {
        if ("items" in item) {
            item.items = item.items.map((it) => (withSelected ? {...it, selected: false} : {label: it.label, value: it.value}));
        } else {
            item = withSelected ? {...item, selected: false} : {label: item.value, value: item.value};
        }

        return item;
    })
}

const toggleSelectAll = (selectAll: boolean, list: Ref<(DualListGroupItem | DualListItem)[]>) => {
    if (props.groupMode) {
        list.value.forEach((groupItem) => {
            (groupItem as DualListGroupItem).items.forEach((item) => item.selected = selectAll);
        })
    } else {
        list.value.forEach((item) => (item as DualListItem).selected = selectAll);
    }
}

const toggleSelectAllSource = (selectAll: boolean) => {
    toggleSelectAll(selectAll, source);
}

const toggleSelectAllDestination = (selectAll: boolean) => {
    toggleSelectAll(selectAll, destination)
}

const transferItems = (fromList: Ref<(DualListGroupItem | DualListItem)[]>, toList: Ref<(DualListGroupItem | DualListItem)[]>) => {
    if (props.groupMode) {
        (fromList.value as DualListGroupItem[]).forEach((groupItem, index) => {
            const selectedItems = groupItem.items.filter((item) => item.selected);
            groupItem.items = groupItem.items.filter((item) => !item.selected);

            if (selectedItems.length > 0) {
                let groupExists = toList.value.find((group) => (group as DualListGroupItem).group === groupItem.group);

                if (groupExists) {
                    groupExists = groupExists as DualListGroupItem;
                    groupExists.items = [...groupExists.items, ...selectedItems.map(((item) => ({...item, selected: false})))]
                } else {
                    groupExists = {
                        group: groupItem.group,
                        items: [...selectedItems.map((item) => ({...item, selected: false}))],
                    }

                    toList.value.push(groupExists);
                }
            } 

            if (groupItem.items.length == 0) {
                fromList.value.splice(index, 1);
            }
        })

    } else {
        const selectedItems = (fromList.value as DualListItem[]).filter((item) => item.selected);
        fromList.value = (fromList.value as DualListItem[]).filter((item) => !item.selected);
        toList.value = [...toList.value, ...(selectedItems.map((item) => ({...item, selected: false})))]
    }
}

const moveToDestination = () => {
    transferItems(source, destination);

    emit('transfer', {
        source: [...initItems(source.value, false)],
        destination: [...initItems(destination.value, false)],
    })
};

const moveToSource = () => {
    transferItems(destination, source);

    emit('transfer', {
        source: [...initItems(source.value, false)],
        destination: [...initItems(destination.value, false)],
    })
};

</script>

<template>
    <div class="duallistbox">
        <ListBox :list="(groupMode ? source as DualListGroupItem[] : source as DualListItem[])" :groupMode="groupMode"  @toggle-select-all="toggleSelectAllSource"/>
        <TransferControls 
            @moveToSource="moveToSource"
            @moveToDestination="moveToDestination"
        />
        <ListBox :list="(groupMode ? destination as DualListGroupItem[] : destination as DualListItem[])" :groupMode="groupMode"  @toggle-select-all="toggleSelectAllDestination"/>
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