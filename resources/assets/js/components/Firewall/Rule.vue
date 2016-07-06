<template>
    <tr v-if="rule">
        <td>
            <input type="text" class="form-control" v-model="rule.src" :disabled="readOnly"></td>
        <td><input type="text" class="form-control" v-model="rule.dst" :disabled="readOnly"></td>
        <td>
            <select class="form-control" v-model="rule.service" :disabled="readOnly">
                <option value="">- select -</option>
                <option v-for="service in services" :value="service">{{service}}</option>
            </select>
        </td>
        <td><input type="checkbox" v-model="rule.allowed" :disabled="readOnly"></td>
        <td><input type="checkbox" v-model="rule.enabled" :disabled="readOnly"></td>
        <td v-if="!hideButtons">
            <button class="btn btn-default" v-show="saveEnabled">
                <i class="fa fa-floppy-o" aria-hidden="true" @click="saveRule"></i>
            </button>
            <button class="btn btn-default" @click="deleteRule">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </td>
    </tr>
</template>

<script type="text/ecmascript-6">

    export default {
        props: {
            rule: {
                required: true
            },
            services: {
                required: true
            },
            hideButtons: Boolean,
            readOnly: Boolean,
            saveEnabled: Boolean
        },
        data() {
            return {};
        },
        ready() {
        },
        methods: {
            saveRule() {
                console.log('save rule');
                console.debug(this.rule);
            },
            deleteRule() {
                this.$dispatch('openDeleteModal', this.rule);
            }
        }
    }
</script>

<style>
</style>