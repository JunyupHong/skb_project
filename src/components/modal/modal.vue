<template>
    <div class="modal-wrapper" v-if="ui.isOpen">
        <div class="modal-window">
            <div class="title-area">
                <div class="title">Modal Window</div>
                <div class="empty-space"></div>
                <div class="close-icon">
                    <svg class="test" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </div>
            </div>
            <div class="content-area">
                <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Scelerisque varius morbi enim nunc faucibus. Cum sociis natoque penatibus et magnis. Sit amet luctus venenatis lectus magna. Urna nunc id cursus metus. Eget est lorem ipsum dolor sit. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
                </div>
            </div>
            <div class="button-area">
                <div class="button positive">button1</div>
                <div class="button negative">button2</div>
            </div>
        </div>
    </div>
</template>

<script src="./modal.ts"/>

<style lang="scss" scoped>
@import './modal.scss';
</style>