import { WebPlugin } from "@capacitor/core";
import type { StartNavigationOptions, StartNavigationPlugin } from "./definitions";
export declare class StartNavigationPluginWeb extends WebPlugin implements StartNavigationPlugin {
    constructor();
    launchMapsApp(options: StartNavigationOptions): Promise<void>;
}
declare const StartNavigation: StartNavigationPluginWeb;
export * from "./definitions";
export { StartNavigation };
