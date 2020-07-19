import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class Main extends Vue {
    private mounted() {
        this.$promiseModal.on('aa', 'bb');
    }
}