export declare const harmonies: {
    readonly complementary: readonly [180];
    readonly analogous: readonly [-30, 30];
    readonly split: readonly [-150, 150];
    readonly triad: readonly [120, 240];
    readonly tetradic: readonly [60, 180, 240];
    readonly square: readonly [90, 180, 270];
    readonly compound: readonly [30, 150, 180];
    readonly monochromatic: readonly [360, 720];
    readonly doubleSplit: readonly [-150, -30, 30, 150];
};
export declare const xy2polar: (x: number, y: number) => [number, number];
export declare const polar2xy: (r: number, phi: number) => [number, number];
export declare const rad2deg: (rad: number) => number;
export declare const deg2rad: (hue: number) => number;
export declare const hsv2rgb: (hue: number, saturation: number, value: number) => import("colord").RgbaColor;
export declare const hex2hsv: (color: string) => {
    hue: number;
    saturation: number;
    value: number;
};
export declare const xy2rgb: (x: number, y: number, radius: number, brightness?: number) => import("colord").RgbaColor;
export declare const hsv2xy: (hue: number, saturation: number, value: number, radius: number) => {
    x: number;
    y: number;
};
