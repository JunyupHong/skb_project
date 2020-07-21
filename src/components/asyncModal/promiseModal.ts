import Vue from 'vue';
import { Component } from 'vue-property-decorator';


declare module 'vue/types/vue' {
    interface PromiseModal extends Vue {
        on: (title: string, content: string) => void;
    }
}

@Component({
    name: 'promiseModal'
})
export default class PromiseModal extends Vue {
    private ui = {
        isOpen: false,
    }
    private on(title: string, content: string) {
        console.log(title, content);
    }
}