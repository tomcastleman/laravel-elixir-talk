<template>
    <div class="list">
        <h1>List</h1>
        <p>Rule count: {{ ruleCount }}</p>
        <div v-show="rules.length">
            <table class="table table-striped">
                <thead is="rule-headings"></thead>
                <tbody>
                <tr is="rule"
                    v-for="rule in rules"
                    :rule="rule"
                    :services="services"
                    :save-enabled="saveEnabled"
                ></tr>
                </tbody>
            </table>
        </div>

        <add-modal :services="services"></add-modal>

        <delete-modal :services="services"></delete-modal>

        <button class="btn btn-default" @click="syncData">
            <i class="fa fa-refresh"></i>
        </button>
    </div>
</template>

<script type="text/ecmascript-6">

    import Rule from './Rule.vue'
    import AddModal from './AddModal.vue'
    import DeleteModal from './DeleteModal.vue'
    import RuleHeadings from './RuleHeadings.vue'

    export default {
        components: {Rule, RuleHeadings, AddModal, DeleteModal},
        props: {
            saveEnabled: Boolean
        },
        data() {
            return {
                rules: [],
                services: []
            };
        },
        computed: {
            ruleCount() {
                return this.rules.length;
            }
        },
        methods: {
            syncData() {
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
            openDeleteModal(rule) {
                this.$broadcast('openDeleteModal', rule);
            },
            addRule(rule) {
                this.rules.push(rule);
            },
            deleteRule(rule) {
                this.rules.$remove(rule);
            }
        },
        ready() {
            this.syncData();
        }
    }
</script>

<style scoped>

</style>
