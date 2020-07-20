import Vue from 'vue';
import PromiseModal from './promiseModal.vue';

declare module 'vue/types/vue' {
    interface Vue {
        $promiseModal: PromiseModal;
    }
}

export default {
    instance: new PromiseModal(),
    install() {
        if (Vue.prototype.$promiseModal === undefined) {
            Vue.prototype.$promiseModal = this.instance;
        }
        this.instance.$mount(document.body.appendChild(document.createElement('div')))
    }
}


