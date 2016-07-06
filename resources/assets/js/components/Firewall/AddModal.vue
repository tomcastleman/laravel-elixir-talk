<template>
    <span>
        <button class="btn btn-primary" data-toggle="modal" data-target="#{{ modalId }}">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        <modal :modal-id="modalId">
            <h4 slot="modalTitle" class="modal-title">Add rule</h4>
            <div slot="modalBody">
                <p>
                    You are about to add one to this list.
                </p>
                <table class="table table-striped">
                    <thead is="rule-headings"
                           hide-buttons>
                    </thead>
                    <tbody>
                    <tr is="rule"
                        :services="services"
                        :rule="rule"
                        hide-buttons
                    ></tr>
                    </tbody>
                </table>
            </div>
            <button slot="modalButton"
                    class="btn btn-default btn-primary"
                    data-dismiss="modal"
                    @click="addRule">
                Add
            </button>
        </modal>
    </span>
</template>

<script type="text/ecmascript-6">

    import Modal from './Modal.vue'
    import uuid from 'uuid';
    import Rule from './Rule.vue';
    import RuleHeadings from './RuleHeadings.vue';

    export default {
        components: {Modal, Rule, RuleHeadings},
        props: ['services'],
        data() {
            return {
                modalId: 'add-modal',
                rule: null
            };
        },
        created() {
            this.initRule();
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
            openAddModal() {
                this.$broadcast('openModal', this.modalId);
            }
        }
    }
</script>

<style>
</style>