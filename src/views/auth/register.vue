<script setup>
    // import ref
    import {ref} from "vue";

    // import router
    import { useRouter } from "vue-router";

    // import api
    import api from "../../api";

    // init router
    const router = useRouter();

    // define state
</script>

<template>
    <div class="uk-margin-medium-top">
        <form action="" method="post">
            <div class="uk-card uk-card-body uk-card-default uk-width-1-2 uk-margin-auto uk-box-shadow-large">
                <h3 class="uk-card-title uk-text-center">REGISTER</h3>
                <div class="uk-content">
                    <div class="uk-column-1-2">
                        <div class="uk-margin-bottom">
                            <input class="uk-input" type="text" placeholder="Nama">
                        </div>
                        <div class="uk-margin-bottom">
                            <input class="uk-input" type="email" placeholder="Email">
                        </div>
                        <div class="uk-margin-bottom">
                            <input class="uk-input" type="password" placeholder="Password">
                        </div>
                        <div class="uk-margin-bottom">
                            <input class="uk-input" type="number" placeholder="Nomor Telepon">
                        </div>
                    </div>
                    <button class="uk-button uk-button-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>