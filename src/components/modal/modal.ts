import Vue from 'vue';
import {Component} from 'vue-property-decorator';


interface UIOption {
    size?: string;
    negativeMessage?: string;
    positiveMessage?: string;
}

declare module 'vue/types/vue' {
    interface Modal {
        on: (uiOption: UIOption, content: string) => {};
        off: () => {};
    }
}

@Component({})
export default class Modal extends Vue {

    private ui = {
        isOpen: true,
        size: 'small',
        negativeMessage: '취소',
        positiveMessage: '확인',
    };
    private content = '';

    private on(uiOption: UIOption, content: string) {
        this.content = content;
        this.ui.isOpen = true;
    }
    private off() {
        this.ui.isOpen = false;
    }
}