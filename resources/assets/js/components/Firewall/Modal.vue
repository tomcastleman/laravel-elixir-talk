<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <slot name="modalTitle"></slot>
                </div>
                <div class="modal-body">
                    <slot name="modalBody"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="modalButton"></slot>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import uuid from 'uuid';
    import Rule from './Rule.vue';
    import RuleHeadings from './RuleHeadings.vue';

    export default {
        components: {Rule, RuleHeadings},
        props: ['modalId'],
        data() {
            return {
                modal: null
            };
        },
        ready() {
            this.modal = $('#' + this.modalId);
        },
        events: {
            openModal(modalId) {
                if (modalId == this.modalId) {
                    this.modal.modal('show');
                }
            }
        }
    }
</script>

<style>
</style>