<template>
    <div>
        <h1>Manifest</h1>
        <pre>{{ manifest | json }}</pre>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                manifest: null
            }
        },
        ready() {
            this.getManifest();
        },
        methods: {
            getManifest() {
                this.$http.get('/build/rev-manifest.json').then((response) => {
                    this.manifest = response.json();
                });
            }
        }
    }
</script>

<style scoped>

</style>