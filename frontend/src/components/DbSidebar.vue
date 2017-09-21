<template>
    <li class="el-menu-item is-active">
        <router-link to="/Login">{{msg}}</router-link>
    </li>
    
</template>

<script>

    export default {
        name: 'db-sidebar',
        data() {
            return {
                msg: 'login'
            }
        }
    }

</script>

<style>
    li {
        padding-left: 20px;
    }
</style>
