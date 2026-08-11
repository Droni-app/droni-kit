export interface DuiSkeletonProps {
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
    width?: string | number;
    height?: string | number;
    animation?: 'pulse' | 'wave' | 'none';
}
declare const _default: import('vue').DefineComponent<DuiSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DuiSkeletonProps> & Readonly<{}>, {
    variant: "text" | "circular" | "rectangular" | "rounded";
    animation: "pulse" | "wave" | "none";
    width: string | number;
    height: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
