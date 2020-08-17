import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import PromiseModal from '@/components/multiPromiseModal/multiPromiseModal.vue';
import Vue from 'vue';

describe('PromiseModal TEST', () => {
    it('Modal On', () => {
        const wrapper: any = mount(PromiseModal);
        wrapper.vm.on({}, 'desc', 'title');
        Vue.nextTick(() => {
            expect(wrapper.vm.ui.isOpen).equal(true);
        });
    });
    it('buttons argument가 없을 때 - Button 미생성', () => {
        const wrapper: any = mount(PromiseModal);
        wrapper.vm.on({}, 'desc', 'title');
        Vue.nextTick(() => {
            expect(wrapper.findAll('.select-area').length).equal(0);
        });
    });
    it('buttons argumentt가 있을 때 - Button 생성', () => {
        const wrapper: any = mount(PromiseModal);
        const inputButtons = ['1', '2', '3'];
        wrapper.vm.on({}, 'desc', 'title', inputButtons);
        Vue.nextTick(() => {
            const buttons = wrapper.findAll('.select-button');
            expect(buttons.length).equal(inputButtons.length);
        });
    });
    it('Resolve - Return Value Test', () => {
        const wrapper: any = mount(PromiseModal);
        const inputButtons = ['1', '2', '3'];
        const selectIdx = 1;

        wrapper.vm
            .on({}, 'desc', 'title', inputButtons)
            .then((idx: number) => {
                expect(idx).to.equal(selectIdx);
            })
            .catch((e: any) => {
                expect(true).equal(false);
            });
        Vue.nextTick(() => {
            const buttons = wrapper.findAll('.select-button');
            buttons.at(selectIdx).trigger('click');
            wrapper.find('.positive').trigger('click');
        });
    });
    it('Reject Test', () => {
        const wrapper: any = mount(PromiseModal);
        wrapper.vm
            .on({ negativeMessage: '취소' }, 'desc', 'title')
            .then(() => {
                expect(true).equal(false);
            })
            .catch((e: any) => {
                expect(true).equal(true);
            });
        Vue.nextTick(() => {
            wrapper.find('.negative').trigger('click');
        });
    });
});
