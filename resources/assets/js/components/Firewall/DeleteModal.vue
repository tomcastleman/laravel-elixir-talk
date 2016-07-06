<template>
    <modal :modal-id="modalId">
        <h4 slot="modalTitle" class="modal-title">Delete rule</h4>
        <div slot="modalBody">
            <p>
                You are about to remove one from this list.
            </p>
            <table class="table table-striped">
                <thead is="rule-headings"
                       hide-buttons>
                </thead>
                <tbody>
                <tr is="rule"
                    :services="services"
                    :rule="rule"
                    read-only
                    hide-buttons
                ></tr>
                </tbody>
            </table>
        </div>
        <button slot="modalButton"
                class="btn btn-default btn-primary"
                data-dismiss="modal"
                @click="deleteRule">
            Delete
        </button>
    </modal>
</template>

<script type="text/ecmascript-6">

    import Modal from './Modal.vue'
    import Rule from './Rule.vue';
    import RuleHeadings from './RuleHeadings.vue';

    export default {
        props: ['services'],
        components: {Modal, Rule, RuleHeadings},
        data() {
            return {
                modalId: 'delete-modal',
                rule: null
            };
        },
        ready() {
            this.modal = $('#delete-modal');
        },
        methods: {
            deleteRule() {
                this.$dispatch('deleteRule', this.rule);
            }
        },
        events: {
            openDeleteModal(rule) {
                this.rule = rule;
                this.$broadcast('openModal', this.modalId);
            }
        }
    }
</script>

<style>
</style>