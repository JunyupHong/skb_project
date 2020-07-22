import Vue from 'vue';
import {Component} from 'vue-property-decorator';


type SizeType = 'normal' | 'small' | 'big' | 'full';
type AlignType = 'center' | 'left';
interface UIOptionType {
    size?: SizeType;
    align?: AlignType;
    negativeMessage?: string;
    positiveMessage?: string;
}

declare module 'vue/types/vue' {
    interface Modal {
        on: (uiOption: UIOptionType, content: string, title?: string) => void;
        off: () => void;
    }
}

@Component({})
export default class Modal extends Vue {
    private ui: {isOpen: boolean; size: SizeType; align: AlignType; negativeMessage?: string; positiveMessage?: string} = {
        isOpen: false,
        size: 'normal',
        align: 'center',
        negativeMessage: undefined,
        positiveMessage: '확인',
    };
    private title?: string = undefined;
    private content = '';

    private on(uiOption: UIOptionType, content: string, title?: string) {
        this.title = title;
        this.content = content;
        this.ui.size = uiOption.size ? uiOption.size : 'normal';
        this.ui.align = uiOption.align ? uiOption.align : 'center';
        this.ui.negativeMessage = uiOption.negativeMessage ? uiOption.negativeMessage : undefined;
        this.ui.positiveMessage = uiOption.positiveMessage ? uiOption.positiveMessage : '확인';
        this.ui.isOpen = true;
        
    }
    private off() {
        this.ui.isOpen = false;
    }
}