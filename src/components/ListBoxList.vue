<script lang="ts" setup>
import type { DualListGroupItem, DualListItem } from '../types';


    type Props = {
        list: DualListGroupItem[] | DualListItem[],
        groupMode: boolean
    }

    const props = defineProps<Props>();

    const toggleItems = (items: any[]) => {
        items.forEach((item) => {
            item.selected = !item.selected;
        })
    }
</script>

<template>
    <template v-for="(item, i) in list" :key="i">
        <template v-if="'items' in item">
            <div class="list-box-list-item-group" @click="toggleItems(item.items)">
                <div class="list-box-list-item-inner">
                    {{  item.group }}
                </div>
            </div>
            <template v-for="(groupItem,j) in item.items" :key="j">
                <div class="list-box-list-item" :class="groupItem.selected ? 'list-box-list-item-selected' : ''" @click="toggleItems([groupItem])">
                    <div class="list-box-list-item-inner">
                        {{  groupItem.label }}
                    </div>
                </div>
            </template>
        </template>

        <template v-else>
            <div class="list-box-list-item" :class="item.selected ? 'list-box-list-item-selected' : ''" @click="toggleItems([item])">
                <div class="lsit-box-list-item-inner">
                    {{ item.label }}
                </div>
            </div>
        </template>
    </template>
</template>

<style scoped>
    .list-box-list-item-group,
    .list-box-list-item {
        width: 100%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        color: #4a5565;
        border-bottom: 1px solid #e5e7eb;
    }

    .list-box-list-item-inner {
        width: 90%;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .list-box-list-item {
        padding: 0 1.25rem;
        color: #030712;
    }

    .list-box-list-item-selected {
        background-color: #f3f4f6;
    }

    .list-box-list-item:hover {
        background-color: #e5e7eb;
    }
</style>