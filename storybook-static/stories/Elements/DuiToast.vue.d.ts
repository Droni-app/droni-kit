import { ToastPosition } from './useToast';
export interface DuiToastProps {
    position?: ToastPosition;
    maxToasts?: number;
    zIndex?: number;
}
declare const _default: import('vue').DefineComponent<DuiToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DuiToastProps> & Readonly<{}>, {
    zIndex: number;
    position: ToastPosition;
    maxToasts: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
