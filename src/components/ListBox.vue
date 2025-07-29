<script lang="ts" setup>
import ListBoxControls from './ListBoxControls.vue';
import ListBoxList from './ListBoxList.vue';
import ListBoxSearch from './ListBoxSearch.vue';


const props = defineProps(['list', 'groupMode']);

</script>

<template>
    <div class="list-box">
        <div class="list-box-search-wrapper">
            <ListBoxSearch />
        </div>
        <div class="list-box-list-wrapper">
            <ListBoxList />
        </div>
        <div class="list-box-controls-wrapper">
            <ListBoxControls />
        </div>
    </div>
</template>

<style scoped>
    .list-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #e5e7eb;
        border-radius: .5rem;
        overflow: hidden;
    }

    .list-box-search-wrapper {
        flex-shrink: 0;
        height: 2.5rem;
    }

    .list-box-list-wrapper {
        flex-shrink: 0;
        height: 300px;
        max-height: 300px;
        overflow-y: auto;
    }

    .list-box-controls-wrapper {
        flex-shrink: 0;
        width: 100%;
        height: 3rem;
    }

</style>