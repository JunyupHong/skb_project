<template>
    <div class="modal-wrapper" v-if="ui.isOpen" @click.self="off">
        <div class="modal-window" :size="ui.size">
            <div v-if="title" class="title-area">
                <div class="title" :center="ui.align==='center'" :size="ui.size">{{title}}</div>
            </div>
            <div class="content-area">
                <div class="content" :center="ui.align==='center'" :size="ui.size" v-html="content"></div>
            </div>
            <div class="button-area" :center="ui.align==='center'">
                <div class="button positive" :size="ui.size" @click="off">{{ui.positiveMessage}}</div>
                <div class="button negative" v-if="ui.negativeMessage" :size="ui.size" @click="off">{{ui.negativeMessage}}</div>
            </div>
        </div>
    </div>
</template>

<script src="./modal.ts"/>

<style lang="scss" scoped>
@import './modal.scss';
</style>