<template>
  <div
    class="multi-promise-modal-wrapper"
    v-if="ui.isOpen"
    @click.self="onReject"
  >
    <div class="promise-modal-window" :size="ui.size">
      <div v-if="title" class="title-area">
        <div class="title" :center="alignCenter" :size="ui.size">
          {{ title }}
        </div>
      </div>
      <div class="content-area">
        <div
          class="content"
          :center="alignCenter"
          :size="ui.size"
          v-html="content"
        ></div>
      </div>
      <div class="select-area">
        <a-radio-group
          class="select-button-area"
          v-model="radioButton"
          button-style="solid"
        >
          <a-radio class="select-button" :value="0" :size="ui.size"
            >청구서 결제</a-radio
          >
          <a-radio class="select-button" :value="1" :size="ui.size"
            >카드 결제</a-radio
          >
          <a-radio class="select-button" :value="2" :size="ui.size"
            >휴대폰 결제</a-radio
          >
        </a-radio-group>
      </div>
      <div class="button-area" :center="alignCenter">
        <div class="button positive" :size="ui.size" @click="onResolve">
          {{ ui.positiveMessage }}
        </div>
        <div
          class="button negative"
          v-if="ui.negativeMessage"
          :size="ui.size"
          @click="onReject"
        >
          {{ ui.negativeMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./multiPromiseModal.ts" />
<style lang="scss" scoped>
@import './multiPromiseModal.scss';
</style>
