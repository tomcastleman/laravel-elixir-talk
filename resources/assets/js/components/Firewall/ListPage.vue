<template>
    <div class="list">
        <h1>List</h1>
        <table class="table table-striped" v-if="rules.length">
            <thead>
            <tr>
                <th>Src</th>
                <th>Dst</th>
                <th>Service</th>
                <th>Allowed</th>
                <th>Enabled</th>
                <th class="buttons"></th>
            </tr>
            </thead>
            <tbody>
            <tr is="rule"
                v-for="rule in rules"
                :rule="rule"
                :services="services"
            ></tr>
            </tbody>
        </table>
        <div v-else>
            <h3>No rules found</h3>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Rule from './Rule.vue'
    import DeleteDialog from './DeleteDialog.vue'

    export default {
        components: {Rule, DeleteDialog},
        data() {
            return {
                rules: [],
                services: []
            };
        },
        ready() {
            this.getRules();
            this.getServices();
        },
        methods: {
            getRules() {
                this.$http.get('/data/rules.json').then((response) => {
                    this.rules = response.json();
                });
            },
            getServices() {
                this.$http.get('/data/services.json').then((response) => {
                    this.services = response.json();
                });
            }
        }
    }
</script>

<style scoped>
    th.buttons {
        min-width: 95px;
    }
</style>
