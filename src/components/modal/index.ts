import Vue from 'vue';
import Modal from './modal.vue';

declare module 'vue/types/vue' {
    interface Vue {
        $modal: Modal;
    }
}

export default {
    instance: new Modal(),
    install() {
        if (Vue.prototype.$modal === undefined) {
            Vue.prototype.$modal = this.instance;
        }
        this.instance.$mount(document.body.appendChild(document.createElement('div')))
    }
}


