import { writable } from 'svelte/store';
export const setTheme = (theme) => themeStore.update((store) => ({ ...store, theme }));
const themeStore = writable({
    themes: [],
    forcedTheme: undefined,
    theme: undefined,
    resolvedTheme: undefined,
    systemTheme: undefined
});
export default themeStore;
