<template>
    <div class="firewall-rules">
        <h1>{{ heading }}</h1>
    </div>
</template>

<script>
    import Rule from './Rule.vue'
    import AddDialog from './AddDialog.vue'
    import DeleteDialog from './DeleteDialog.vue'

    export default {
        components: {Rule, AddDialog, DeleteDialog},
        data() {
            return {
                heading: 'Firewall Rules'
            };
        },
        ready() {
            console.log('List ready');
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
