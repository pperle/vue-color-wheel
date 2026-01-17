import type { ColorWheelProps, Harmony } from './types';
declare const _default: import("vue").DefineComponent<ColorWheelProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:color": (color: string) => any;
    change: (colors: Harmony[]) => any;
}, string, import("vue").PublicProps, Readonly<ColorWheelProps> & Readonly<{
    "onUpdate:color"?: ((color: string) => any) | undefined;
    onChange?: ((colors: Harmony[]) => any) | undefined;
}>, {
    radius: number;
    harmony: import("./types").HarmonyType;
    wheel: import("./types").WheelType;
    showBrightness: boolean;
    color: string;
    defaultColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
