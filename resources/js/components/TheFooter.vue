<template>
    <v-footer absolute dark color="deep-purple" app>
        <span>
            <a
                class="link"
                href="https://www.renzocarara.it/"
                target="_blank"
                rel="noopener noreferrer"
                >Renzo Carara - &copy; {{ new Date().getFullYear() }}
            </a></span
        >
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="css" scoped>
.mobile {
    font-size: 12px;
}
.link {
    text-decoration: none;
    color: white;
}
@media screen and (max-width: 600px) {
    .mobile {
        font-size: 10px;
    }
}
</style>