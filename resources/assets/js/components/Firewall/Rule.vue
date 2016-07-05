<template>
    <tr>
        <td><input type="text" class="form-control" v-model="rule.src"></td>
        <td><input type="text" class="form-control" v-model="rule.dst"></td>
        <td>
            <select class="form-control" v-model="rule.service">
                <option>- select -</option>
                <option v-for="service in services" :value="service">{{service}}</option>
            </select>
        </td>
        <td><input type="checkbox" v-model="rule.allowed"></td>
        <td><input type="checkbox" v-model="rule.enabled"></td>
        <td>
            <button class="btn btn-default">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
            <delete-dialog :rule="rule"></delete-dialog>
        </td>
    </tr>
</template>

<script>
    import DeleteDialog from './DeleteDialog.vue';

    export default {
        components: {DeleteDialog},
        props: ['rule', 'services'],
        data() {
            return {};
        },
        ready() {
        }
    }
</script>

<style>
</style>