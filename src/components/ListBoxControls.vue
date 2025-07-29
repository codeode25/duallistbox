<script lang="ts" setup>

const emits = defineEmits(['toggleSelectAll'])

const toggleSelectAll = (selectAll: boolean) => emits('toggleSelectAll', selectAll)

</script>

<template>
    <div class="list-box-controls">
        <button class="control-button control-button-all" @click="toggleSelectAll(true)">All</button>
        <button class="control-button control-button-none" @click="toggleSelectAll(false)">None</button>
    </div>
</template>

<style scoped>
    .list-box-controls {
        display: flex;
        height: 100%;
    }

    .control-button {
        width: 100%;
        height: 100%;
        color: #fff;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700;
        outline: none;
        border: none;
    }

    .control-button-all {
        background-color: #ff8904;
    }

    .control-button-all:hover {
        background-color: #f54a00;
    }

    .control-button-none {
        background-color: #99a1af;
    }

    .control-button-none:hover {
        background-color: #6a7282;
    }
</style>