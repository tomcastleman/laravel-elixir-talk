<template>
    <thead>
    <tr>
        <th>Src</th>
        <th>Dst</th>
        <th>Service</th>
        <th>Allowed</th>
        <th>Enabled</th>
        <th v-if="!hideButtons" class="buttons"></th>
    </tr>
    </thead>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            hideButtons: {
                required: false,
                default: false
            }
        }
    }
</script>

<style scoped>
    th.buttons {
        min-width: 95px;
    }
</style>