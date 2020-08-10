import Vue from 'vue';
import MultiPromiseModal from './multiPromiseModal.vue';

declare module 'vue/types/vue' {
    interface Vue {
        $multiPromiseModal: MultiPromiseModal;
    }
}

export default {
    instance: new MultiPromiseModal(),
    install() {
        if (Vue.prototype.$multiPromiseModal === undefined) {
            Vue.prototype.$multiPromiseModal = this.instance;
        }
        this.instance.$mount(document.body.appendChild(document.createElement('div')))
    }
}


