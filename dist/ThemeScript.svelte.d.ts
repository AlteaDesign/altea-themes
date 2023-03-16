import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        forcedTheme: string;
        storageKey: string;
        attribute: string;
        enableSystem: boolean;
        defaultTheme: string;
        value: {
            [themeName: string]: string;
        };
        attrs: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThemeScriptProps = typeof __propDef.props;
export type ThemeScriptEvents = typeof __propDef.events;
export type ThemeScriptSlots = typeof __propDef.slots;
export default class ThemeScript extends SvelteComponentTyped<ThemeScriptProps, ThemeScriptEvents, ThemeScriptSlots> {
}
export {};
