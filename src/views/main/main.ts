import Vue from 'vue';
import {Component} from 'vue-property-decorator';

type SizeType = 'small' | 'big' | 'normal';
type AlignType = 'center' | 'left';
interface UIOptionType {
    size?: SizeType;
    align?: AlignType;
    negativeMessage?: string;
    positiveMessage?: string;
}

@Component({})
export default class Main extends Vue {
    private normalModal: {option: {size: string[]; align: string[]}; ui: UIOptionType; title: string; content: string} = {
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
        content: 'normal modal test',
    }
    private normalModalTimeout: {option: {size: string[]; align: string[]}; ui: UIOptionType; title: string; content: string} = {
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
        content: 'normal modal timeout test',
    }

    private normalModalOn () {
        console.log(this.normalModal);
        this.$modal.on({
            size: this.normalModal.ui.size,
            align: this.normalModal.ui.align,
            positiveMessage: this.normalModal.ui.positiveMessage !== '' ? this.normalModal.ui.positiveMessage : undefined,
            negativeMessage: this.normalModal.ui.negativeMessage !== '' ? this.normalModal.ui.negativeMessage : undefined,
        }, this.normalModal.content, this.normalModal.title !== '' ? this.normalModal.title : undefined);
    }
    private normalModalOnTimeout() {
        setTimeout(() => this.$modal.on({
                size: this.normalModalTimeout.ui.size,
                align: this.normalModalTimeout.ui.align,
                positiveMessage: this.normalModalTimeout.ui.positiveMessage !== '' ? this.normalModalTimeout.ui.positiveMessage : undefined,
                negativeMessage: this.normalModalTimeout.ui.negativeMessage !== '' ? this.normalModalTimeout.ui.negativeMessage : undefined,
            }, this.normalModalTimeout.content, this.normalModalTimeout.title !== '' ? this.normalModalTimeout.title : undefined),
            1500);
    }
}