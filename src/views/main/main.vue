<template>
    <div class="main-wrapper">
        <h1>Modal Component Test</h1>

        <div class="test-area">
            <div class="content-area">
                <h2>Normal Modal Test</h2>
                <div class="option">
                    <v-select
                        :items="normalModal.option.size"
                        label="Size"
                        v-model="normalModal.ui.size"
                    ></v-select>
                    <v-select
                        :items="normalModal.option.align"
                        label="Horizontal Align"
                        v-model="normalModal.ui.align"
                    ></v-select>
                    <v-text-field label="Positive Message" v-model="normalModal.ui.positiveMessage"></v-text-field>
                    <v-text-field label="Negative Message" v-model="normalModal.ui.negativeMessage"></v-text-field>
                    <v-text-field label="Title" v-model="normalModal.title"></v-text-field>
                    <v-text-field label="Content" v-model="normalModal.content"></v-text-field>
                </div>
                <v-btn class="button" @click="normalModalOn">modal on</v-btn>
            </div>
             <div class="content-area">
                <h2>Promise Modal Test</h2>
                <div class="option">
                    <v-select
                        :items="promiseModal.option.size"
                        label="Size"
                        v-model="promiseModal.ui.size"
                    ></v-select>
                    <v-select
                        :items="promiseModal.option.align"
                        label="Horizontal Align"
                        v-model="promiseModal.ui.align"
                    ></v-select>
                    <v-text-field label="Positive Message" v-model="promiseModal.ui.positiveMessage"></v-text-field>
                    <v-text-field label="Negative Message" v-model="promiseModal.ui.negativeMessage"></v-text-field>
                    <v-text-field label="Title" v-model="promiseModal.title"></v-text-field>
                    <v-text-field label="Content" v-model="promiseModal.content"></v-text-field>
                </div>
                <v-btn class="button" @click="promiseModalOn">modal on</v-btn>
            </div>
           
        </div>
        <div class="line"></div>
        <div class="test-area">
            <div class="content-area">
                <h2>Promise Modal Test - Multiple</h2>
                <div class="option">
                    <v-select
                        :items="promiseModalMultiple.option.size"
                        label="Size"
                        v-model="promiseModalMultiple.ui.size"
                    ></v-select>
                    <v-select
                        :items="promiseModalMultiple.option.align"
                        label="Horizontal Align"
                        v-model="promiseModalMultiple.ui.align"
                    ></v-select>
                    <v-text-field label="Positive Message" v-model="promiseModalMultiple.ui.positiveMessage"></v-text-field>
                    <v-text-field label="Negative Message" v-model="promiseModalMultiple.ui.negativeMessage"></v-text-field>
                    <v-text-field label="Title" v-model="promiseModalMultiple.title"></v-text-field>
                    <v-text-field label="Content" v-model="promiseModalMultiple.content"></v-text-field>
                </div>
                <v-btn class="button" @click="onMultiplePromiseModal">Multiple Modal On</v-btn>
            </div>
            <div class="content-area">
                <h2>Promise Modal - UI TEST</h2>
                <div class="option flex">
                    <v-btn class="button" small @click="onClickUITest({size: 'small', align: 'center'}, 'size: SMALL / align: CENTER', 'MODAL TEST')">small / center</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'small', align: 'center', negativeMessage: '취소'}, 'size: SMALL / align: CENTER / NEGATIVE', 'MODAL TEST')">small / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'small', align: 'left'}, 'size: SMALL / align: LEFT', 'MODAL TEST')">small / left</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'small', align: 'left', negativeMessage: '취소'}, 'size: SMALL / align: LEFT / NEGATIVE', 'MODAL TEST')">small / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({align: 'center'}, 'size: NORMAL / align: CENTER', 'MODAL TEST')">normal / center</v-btn>
                    <v-btn class="button" small @click="onClickUITest({align: 'center', negativeMessage: '취소'}, 'size: NORMAL / align: CENTER / NEGATIVE', 'MODAL TEST')">normal / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({align: 'left'}, 'size: NORMAL / align: LEFT', 'MODAL TEST')">normal / left</v-btn>
                    <v-btn class="button" small @click="onClickUITest({align: 'left', negativeMessage: '취소'}, 'size: NORMAL / align: LEFT / NEGATIVE', 'MODAL TEST')">normal / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'big', align: 'center'}, 'size: BIG / align: CENTER', 'MODAL TEST')">big / center</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'big', align: 'center', negativeMessage: '취소'}, 'size: BIG / align: CENTER / NEGATIVE', 'MODAL TEST')">big / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'big', align: 'left'}, 'size: BIG / align: LEFT', 'MODAL TEST')">big / left</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'big', align: 'left', negativeMessage: '취소'}, 'size: BIG / align: LEFT / NEGATIVE', 'MODAL TEST')">big / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'full', align: 'center'}, 'size: FULL / align: CENTER', 'MODAL TEST')">full / center</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'full', align: 'center', negativeMessage: '취소'}, 'size: FULL / align: CENTER / NEGATIVE', 'MODAL TEST')">full / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'full', align: 'left'}, 'size: FULL / align: LEFT', 'MODAL TEST')">full / left</v-btn>
                    <v-btn class="button" small @click="onClickUITest({size: 'full', align: 'left', negativeMessage: '취소'}, 'size: FULL / align: LEFT / NEGATIVE', 'MODAL TEST')">full / left / negative</v-btn>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="test-area">
            <div class="content-area">
                <h2>Multi Promise Modal - UI TEST</h2>
                <div class="option flex">
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'small', align: 'center'}, 'size: SMALL / align: CENTER', 'MODAL TEST')">small / center</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'small', align: 'center', negativeMessage: '취소'}, 'size: SMALL / align: CENTER / NEGATIVE', 'MODAL TEST')">small / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'small', align: 'left'}, 'size: SMALL / align: LEFT', 'MODAL TEST')">small / left</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'small', align: 'left', negativeMessage: '취소'}, 'size: SMALL / align: LEFT / NEGATIVE', 'MODAL TEST')">small / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({align: 'center'}, 'size: NORMAL / align: CENTER', 'MODAL TEST')">normal / center</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({align: 'center', negativeMessage: '취소'}, 'size: NORMAL / align: CENTER / NEGATIVE', 'MODAL TEST')">normal / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({align: 'left'}, 'size: NORMAL / align: LEFT', 'MODAL TEST')">normal / left</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({align: 'left', negativeMessage: '취소'}, 'size: NORMAL / align: LEFT / NEGATIVE', 'MODAL TEST')">normal / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'big', align: 'center'}, 'size: BIG / align: CENTER', 'MODAL TEST')">big / center</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'big', align: 'center', negativeMessage: '취소'}, 'size: BIG / align: CENTER / NEGATIVE', 'MODAL TEST')">big / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'big', align: 'left'}, 'size: BIG / align: LEFT', 'MODAL TEST')">big / left</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'big', align: 'left', negativeMessage: '취소'}, 'size: BIG / align: LEFT / NEGATIVE', 'MODAL TEST')">big / left / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'full', align: 'center'}, 'size: FULL / align: CENTER', 'MODAL TEST')">full / center</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'full', align: 'center', negativeMessage: '취소'}, 'size: FULL / align: CENTER / NEGATIVE', 'MODAL TEST')">full / center / negative</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'full', align: 'left'}, 'size: FULL / align: LEFT', 'MODAL TEST')">full / left</v-btn>
                    <v-btn class="button" small @click="onClickUITestMulti({size: 'full', align: 'left', negativeMessage: '취소'}, 'size: FULL / align: LEFT / NEGATIVE', 'MODAL TEST')">full / left / negative</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./main.ts"/>

<style lang="scss" scoped>
@import './main.scss';
</style>
