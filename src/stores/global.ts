import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state() {
        return {
            collapsed: false,
        };
    },
    actions: {
        changeCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
    getters: {

    },
});