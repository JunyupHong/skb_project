<template>
    <div class="modal-wrapper" v-if="ui.isOpen" @click.self="off">
        <div class="modal-window">
            <div v-if="title" class="title-area">
                <div class="title" :center="ui.align==='center'">{{title}}</div>
            </div>
            <div class="content-area">
                <div class="content" :center="ui.align==='center'" v-html="content">aa</div>
            </div>
            <div class="button-area" :center="ui.align==='center'">
                <div class="button positive" @click="off">{{ui.positiveMessage}}</div>
                <div v-if="ui.negativeMessage" class="button negative" @click="off">{{ui.negativeMessage}}</div>
            </div>
        </div>
    </div>
</template>

<script src="./modal.ts"/>

<style lang="scss" scoped>
@import './modal.scss';
</style>