<template>
    <Navbar/>
    <div class="rout">
      <DashItems/>
      <router-view/>
    </div>
</template>

<script setup>
import DashItems from '@/components/Dashboard/DashItems.vue';
import Navbar from '@/components/Navbar/Navbar.vue';


</script>


<style lang="scss" scoped>
.rout{

}
</style>