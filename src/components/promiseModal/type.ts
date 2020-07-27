export type SizeType = 'normal' | 'small' | 'big' | 'full';
export type AlignType = 'center' | 'left';
export interface UIOptionType {
    size?: SizeType;
    align?: AlignType;
    negativeMessage?: string;
    positiveMessage?: string;
}
