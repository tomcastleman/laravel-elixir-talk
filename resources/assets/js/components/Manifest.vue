<template>
    <div>
        <h2>Manifest</h2>
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

    h2 {
        color: blue;
    }
</style>