<template>
    <!-- Modal -->
    <div class="modal fade text-left" id="delete-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Confirm delete rule</h4>
                </div>
                <div class="modal-body">
                    <div v-if="rule">
                        <table class="table table-striped">
                            <thead is="rule-headings"
                                   hide-buttons="true">
                            </thead>
                            <tbody>
                            <tr is="rule"
                                :services="services"
                                :rule="rule"
                                read-only="true"
                                hide-buttons="true"
                            ></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default btn-primary" data-dismiss="modal" @click="deleteRule">
                        Delete
                    </button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import Rule from './Rule.vue';
    import RuleHeadings from './RuleHeadings.vue';

    export default {
        props: ['services'],
        components: {Rule, RuleHeadings},
        data() {
            return {
                dialog: null,
                rule: null
            };
        },
        ready() {
            this.dialog = $('#delete-modal');
        },
        methods: {
            deleteRule() {
                this.$dispatch('deleteRule', this.rule);
            }
        },
        events: {
            openDeleteDialog(rule) {
                this.rule = rule;
                this.dialog.modal('show');
            }
        }
    }
</script>

<style>
</style>