<template>
    <tr>
        <td><input type="text" class="form-control" v-model="rule.src"></td>
        <td><input type="text" class="form-control" v-model="rule.dst"></td>
        <td>
            <select class="form-control" v-model="rule.service">
                <option value="">- select -</option>
                <option v-for="service in services" :value="service">{{service}}</option>
            </select>
        </td>
        <td><input type="checkbox" v-model="rule.allowed"></td>
        <td><input type="checkbox" v-model="rule.enabled"></td>
        <td v-if="!addRule">
            <button class="btn btn-default">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>
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
            addRule: {
                required: false,
                default: false
            }
        },
        data() {
            return {};
        },
        ready() {
        },
        methods: {
            deleteRule() {
                this.$dispatch('openDeleteDialog', this.rule);
            }
        }
    }
</script>

<style>
</style>