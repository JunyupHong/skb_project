<template>
    <div class="main-wrapper">
        <h1>Modal Component Test</h1>
        <div class="test-area">
            <div class="content-area">
                <h2>Normal Modal Test</h2>
                <div class="content">
                    <div class="option">
                        <div class="option-title">size</div>
                        <div class="option-content-area">
                            <div class="option-content">small</div>
                            <div class="option-content">normal</div>
                            <div class="option-content">big</div>
                        </div>
                    </div>
                    <div class="button">on</div>
                </div>
            </div>
        </div>
        <!-- <div class="button-area">
            <div class="button" @click="normalModalOn">Normal Modal</div>
            <div class="button" @click="nonNegativeNormalModalOsn">Non Negative Modal</div>
            <div class="button" @click="leftModal">Normal Modal Test - timeout</div>
        </div>
        <div class="button-area">
            <div class="button" @click="normalModalOn">Normal Modal Test</div>
            <div class="button" @click="normalModalOnTimeout">Normal Modal Test - timeout</div>
        </div> -->
    </div>
</template>

<script src="./main.ts"/>

<style lang="scss" scoped>
@import './main.scss';
</style>
