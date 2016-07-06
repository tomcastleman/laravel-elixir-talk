<template>
    <div class="list">
        <h1>List</h1>
        <div v-if="rules.length">
            <table class="table table-striped">
                <thead is="rule-headings"></thead>
                <tbody>
                <tr is="rule"
                    v-for="rule in rules"
                    :rule="rule"
                    :services="services"
                ></tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h3>No rules found</h3>
        </div>

        <add-dialog :services="services"></add-dialog>

        <delete-dialog></delete-dialog>

        <button class="btn btn-default" @click="init">
            <i class="fa fa-refresh"></i>
        </button>
    </div>
</template>

<script type="text/ecmascript-6">

    import Rule from './Rule.vue'
    import AddDialog from './AddDialog.vue'
    import DeleteDialog from './DeleteDialog.vue'
    import RuleHeadings from './RuleHeadings.vue'

    export default {
        components: {Rule, RuleHeadings, AddDialog, DeleteDialog},
        data() {
            return {
                rules: [],
                services: []
            };
        },
        ready() {
            this.init();
        },
        methods: {
            init() {
                this.getRules();
                this.getServices();
            },
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
        },
        events: {
            openDeleteDialog(rule) {
                this.$broadcast('openDeleteDialog', rule);
            },
            addRule(rule) {
                this.rules.push(rule);
            },
            deleteRule(rule) {
                this.rules.$remove(rule);
            }
        }
    }
</script>

<style scoped>

</style>
