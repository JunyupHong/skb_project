import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class Main extends Vue {
    private normalModalOn () {
        this.$modal.on({negativeMessage: '취소'}, '등록한 선호 채널 목록을 초기화 하시겠어요?', '선호 채널 초기화');
    }
    private nonNegativeNormalModalOn() {
        this.$modal.on({}, '등록한 선호 채널 목록을 초기화 하시겠어요?', '선호 채널 초기화');
    }
    private normalModalOnTimeout() {
        setTimeout(() => this.$modal.on({}, 'timeout modal testing...'), 1500);
    }
}