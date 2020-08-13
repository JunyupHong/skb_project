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
        this.instance.$mount(document.body.appendChild(document.createElement('div')));
    },
    // TODO
    // modal instance를 여러개 생성하는 방법 확인해보기
    // $destory 를 사용해서 없애야할듯
    // instances: [] as Modal[],
    // install() {
    //     this.instances.push(new Modal());
    //     Vue.prototype[`$modal+${this.instances.length}`] = this.instances[this.instances.length-1];
    //     (this.instances[this.instances.length-1] as Modal).$mount(document.body.appendChild(document.createElement('div')));
    // }
};
