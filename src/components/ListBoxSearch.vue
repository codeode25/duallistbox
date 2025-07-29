<script lang="ts" setup>
    const emit = defineEmits(['search']);

    const search = (e) => emit('search', e.target.value);
</script>

<template>
    <div class="list-box-search">
        <input type="text" placeholder="Search items..." @keyup="search" />
    </div>
</template>

<style scoped>
    .list-box-search {
        height: 100%;
        border-bottom: 1px solid #e5e7eb;
    }

    .list-box-search input {
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        font-size: 1rem;
        border: none;
        outline: none;
    }

    .list-box-search input:focus {
        outline: none;
    }
</style>