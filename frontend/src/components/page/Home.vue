<template>
    <div>
       
        <db-filterinput></db-filterinput>
    
        <db-table></db-table>
    
    </div>
</template>
<script>
    import DbFilterinput from '../DbFilterinput.vue'
    
    import DbTable from '../DbTable.vue'
    
    export default {
    
        components: {
    
            DbFilterinput,
    
            DbTable,
    
        }
    
    }
</script>