<template>
    <span>
        <button class="btn btn-primary" data-toggle="modal" data-target="#add-modal">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>

        <!-- Modal -->
        <div class="modal fade text-left" id="add-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Add rule</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped">
                            <thead is="rule-headings"
                                   hide-buttons="true">
                            </thead>
                            <tbody>
                            <tr is="rule"
                                :services="services"
                                :rule="rule"
                                hide-buttons="true"
                            ></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default btn-primary" data-dismiss="modal" @click="addRule">
                            Add
                        </button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script type="text/ecmascript-6">

    import uuid from 'uuid';
    import Rule from './Rule.vue';
    import RuleHeadings from './RuleHeadings.vue';

    export default {
        components: {Rule, RuleHeadings},
        props: ['services'],
        data() {
            return {
                dialog: null,
                rule: null,
            };
        },
        created() {
            this.initRule();
        },
        ready() {
            this.dialog = $('#add-modal');
        },
        methods: {
            addRule() {
                this.$dispatch('addRule', _.clone(this.rule));
                this.initRule();
            },
            initRule() {
                this.rule = {
                    'id': uuid.v4(),
                    'src': null,
                    'dst': null,
                    'service': '',
                    'allowed': true,
                    'enabled': true
                };
            }
        },
        events: {
            openAddDialog() {
                this.dialog.modal('show');
            }
        }
    }
</script>

<style>
</style>