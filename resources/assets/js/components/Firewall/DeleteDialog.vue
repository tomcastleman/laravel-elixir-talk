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
                    <p>{{ rule | json }}</p>
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

    export default {
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