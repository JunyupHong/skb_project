import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import { UIOptionType} from '../../components/promiseModal/type';

@Component({})
export default class Main extends Vue {
    private normalModal: {option: {size: string[]; align: string[]}; ui: UIOptionType; title: string; content: string} = {
        option: {
            size: ['small', 'normal', 'big', 'full'],
            align: ['center', 'left'], 
        },
        ui: {
            size: 'normal',
            align: 'center',
            positiveMessage: '확인',
            negativeMessage: '',
        },
        title: '',
        content: 'normal modal test',
    }

    private promiseModal: {option: {size: string[]; align: string[]}; ui: UIOptionType; title: string; content: string} = {
        option: {
            size: ['small', 'normal', 'big', 'full'],
            align: ['center', 'left'], 
        },
        ui: {
            size: 'normal',
            align: 'center',
            positiveMessage: '확인',
            negativeMessage: '',
        },
        title: '',
        content: 'promise modal test',
    }
    private promiseModalMultiple: {option: {size: string[]; align: string[]}; ui: UIOptionType; title: string; content: string} = {
        option: {
            size: ['small', 'normal', 'big'],
            align: ['center', 'left'], 
        },
        ui: {
            size: 'normal',
            align: 'center',
            positiveMessage: '확인',
            negativeMessage: '',
        },
        title: '',
        content: 'promise modal timeout test',
    }

    private normalModalOn () {
        console.log('normal modal start');
        this.$modal.on({
            size: this.normalModal.ui.size,
            align: this.normalModal.ui.align,
            positiveMessage: this.normalModal.ui.positiveMessage !== '' ? this.normalModal.ui.positiveMessage : undefined,
            negativeMessage: this.normalModal.ui.negativeMessage !== '' ? this.normalModal.ui.negativeMessage : undefined,
        }, this.normalModal.content, this.normalModal.title !== '' ? this.normalModal.title : undefined);
        console.log('normal modal end');
    }

    private async promiseModalOn() {
        console.log('promise modal start');
        try {
            await this.$promiseModal.on({
                size: this.promiseModal.ui.size,
                align: this.promiseModal.ui.align,
                positiveMessage: this.promiseModal.ui.positiveMessage !== '' ? this.promiseModal.ui.positiveMessage : undefined,
                negativeMessage: this.promiseModal.ui.negativeMessage !== '' ? this.promiseModal.ui.negativeMessage : undefined,
            }, this.promiseModal.content, this.promiseModal.title !== '' ? this.promiseModal.title : undefined);
            console.log('click resolve');
        } catch(e) {
            console.log('click reject');
        } finally {
            console.log('promise modal end');
        }
    }
    private async onMultiplePromiseModal() {
        try {
            await this.$promiseModal.on({
                size: this.promiseModalMultiple.ui.size,
                align: this.promiseModalMultiple.ui.align,
                positiveMessage: this.promiseModalMultiple.ui.positiveMessage !== '' ? this.promiseModalMultiple.ui.positiveMessage : undefined,
                negativeMessage: this.promiseModalMultiple.ui.negativeMessage !== '' ? this.promiseModalMultiple.ui.negativeMessage : undefined,
            }, this.promiseModalMultiple.content, this.promiseModalMultiple.title !== '' ? this.promiseModalMultiple.title : undefined);
            console.log('modal done');
            await this.$promiseModal.on({positiveMessage: '결제', negativeMessage: '취소'},'결제하시겠습니까?', 'PROMISE MODAL');
            console.log('결제 modal done');
            await this.$promiseModal.on({}, '결제가 완료 되었습니다', 'PROMISE MODAL');
            console.log('결제 완료 modal done');
        } catch(e) {
            await this.$promiseModal.on({size: 'small'}, '결제가 취소되었습니다', 'PROMISE MODAL');
            console.log('결제 취소 modal done');
        } finally {
            await this.$promiseModal.on({size: 'small'}, '결제 과정 완료', 'PROMISE MODAL');
            console.log('modal process done');
        }
    }

    private async onClickUITest(option: UIOptionType, content: string, title: string) {
        try {
            console.log('promise modal on');
            await this.$promiseModal.on(option, content, title);
            console.log('promise modal off - resolve');
        } catch(e) {
            console.log('promise modal off - reject');
        }
    }
    private async onClickUITestMulti(option: UIOptionType, content: string, title: string) {
        try {
            console.log('promise modal on');
            const idx = await this.$multiPromiseModal.on(option, content, title);
            console.log('promise modal off - resolve', idx);
        } catch(e) {
            console.log('promise modal off - reject');
        }
    }
}