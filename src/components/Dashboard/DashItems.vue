<template>
    <div class="dash">
        <div class="container">
            <div class="dash-add">
                <router-link class="add-btn" 
                to="/add">
                    <img src="@/assets/images/plus.svg" alt="">
                    <span>New Item</span>
                </router-link>
            </div>
            <div class="dash-info">
                <h4 class="dash-info_title">
                    <img src="@/assets/images/darhboard.svg" alt="">
                    Dashboard
                </h4>
                
                <ul class="dash-info_list">
                    <li v-for="(item, idx) in dashList" :key="idx">
                        <router-link class="dash-info_list-link" to="" >
                           {{ item }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

let dashList = reactive(["Commarce","Analytics","Cyrpto","Helpdesk","Monitoring","Fitnes"])
</script>
