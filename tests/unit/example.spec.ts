import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import PromiseModal from '@/components/promiseModal/promiseModal.vue';
import Vue from 'vue';

let Constructor;
let vm: any;
beforeEach(() => {
  Constructor = Vue.extend(PromiseModal);
  vm = new Constructor().$mount();
});

describe('PromiseModal TEST', () => {
  it('test1', () => {
    const component = shallowMount(PromiseModal);
    expect(component.find('.select-button').trigger('click')).equal(0);

    // const wrapper = shallowMount(PromiseModal, {});
    // console.log(wrapper);
    // // expect(wrapper.text()).to.include(msg)

    // expect(msg).to.include('new');
    // // expect(wrapper.on({}, 'desc', 'TITLE')).to.;
    // expect(1).equal(1);
    // // expect(wrapper.on());
  });
});
