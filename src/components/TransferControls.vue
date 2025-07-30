<script lang="ts" setup>

const emit = defineEmits(['moveToDestination', 'moveToSource']);

const moveToDestination = () => emit('moveToDestination');
const moveToSource = () => emit('moveToSource');
    
</script>

<template>
    <div class="transfer-controls">
        <button class="transfer-controls-button" @click="moveToSource">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="icon"
                >
                <path
                    fill="currentColor"
                    d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
                ></path>
            </svg>
        </button>
        <button class="transfer-controls-button" @click="moveToDestination">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="icon"
            >
                <path
                    fill="currentColor"
                    d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
                ></path>
            </svg>
        </button>

    </div>
</template>

<style scoped>
    .transfer-controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .transfer-controls .transfer-controls-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        background-color: #ff6900;
        cursor: pointer;
        padding: .75rem;
        outline: none;
        border: none;
    }

    .transfer-controls .transfer-controls-button:hover {
        background-color: #f54a00;
    }

    .transfer-controls .transfer-controls-button .icon {
        color: white;
        height: 1.5rem;
        width: 1.5rem;
        transform: rotate(90deg);
    }

    @media screen and (min-width: 48rem) {
        .transfer-controls {
            flex-direction: column;
        }

        .transfer-controls .transfer-controls-button .icon {
            transform: rotate(0);
        }
    }
</style>