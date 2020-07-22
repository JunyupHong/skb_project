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
                <h2>Normal Modal Test - Timeout</h2>
                <div class="option">
                    <v-select
                        :items="normalModalTimeout.option.size"
                        label="Size"
                        v-model="normalModalTimeout.ui.size"
                    ></v-select>
                    <v-select
                        :items="normalModalTimeout.option.align"
                        label="Horizontal Align"
                        v-model="normalModalTimeout.ui.align"
                    ></v-select>
                    <v-text-field label="Positive Message" v-model="normalModalTimeout.ui.positiveMessage"></v-text-field>
                    <v-text-field label="Negative Message" v-model="normalModalTimeout.ui.negativeMessage"></v-text-field>
                    <v-text-field label="Title" v-model="normalModalTimeout.title"></v-text-field>
                    <v-text-field label="Content" v-model="normalModalTimeout.content"></v-text-field>
                </div>
                <v-btn class="button" @click="normalModalOnTimeout">timeout modal on</v-btn>
            </div>
           
        </div>
        <div class="line"></div>
        <div class="test-area">
            <div class="content-area">
                <h2>Promise Modal Test</h2>
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
                <v-btn class="button" @click="promiseModalOn">modal on</v-btn>
            </div>
            <div class="content-area">
                <h2>Promise Modal Test - Timeout</h2>
                <div class="option">
                    <v-select
                        :items="normalModalTimeout.option.size"
                        label="Size"
                        v-model="normalModalTimeout.ui.size"
                    ></v-select>
                    <v-select
                        :items="normalModalTimeout.option.align"
                        label="Horizontal Align"
                        v-model="normalModalTimeout.ui.align"
                    ></v-select>
                    <v-text-field label="Positive Message" v-model="normalModalTimeout.ui.positiveMessage"></v-text-field>
                    <v-text-field label="Negative Message" v-model="normalModalTimeout.ui.negativeMessage"></v-text-field>
                    <v-text-field label="Title" v-model="normalModalTimeout.title"></v-text-field>
                    <v-text-field label="Content" v-model="normalModalTimeout.content"></v-text-field>
                </div>
                <v-btn class="button" @click="promiseModalOnTimeout">timeout modal on</v-btn>
            </div>
           
        </div>
    </div>
</template>

<script src="./main.ts"/>

<style lang="scss" scoped>
@import './main.scss';
</style>
