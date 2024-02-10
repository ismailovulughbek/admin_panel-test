<template>
    <section class="input-sec">
        <div class="crud">
            <h3 class="crud-title">Edit</h3>
            <ul class="crud-list">
                <li class="crud-list_num">
                    <div class="column">
                        <div>
                            <span>Type id</span>
                            <input v-model="elemList.product_type_id" 
                            type="text">
                        </div>
                        <div>
                            <span>Cost</span>
                            <input v-model="elemList.cost" 
                            type="text">
                        </div>
                    </div>

                </li>
                <li>
                    <span>Name</span>
                    <input v-model="elemList.name_uz"
                    type="text">
                </li>
                <li>
                    <span>Adress</span>
                    <input v-model="elemList.address"
                    type="text">
                </li>
                <!-- <li>
                    <span>Create date</span>
                    <input v-model="elemList.created_date"
                    type="text">
                </li> -->

            </ul>
            <div class="crud-div">
                <button class="crud-btn" 
                @click="saveProd(elemList)">
                    Save
                </button>
                <RouterLink to="/" class="crud-see">
                    See
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProductStore } from "@/stores/product.js";
const proStore = useProductStore()

const elemList = {
    "product_type_id": null,
    "name_uz": "",
    "cost": null,
    "address": "",
    "created_date":new Date('2023-12-04T14:06:50.220Z').getTime()
}

const saveProd = ()=>{
    proStore.postProduct(elemList)
    // proStore.getProducts()
}
</script>


<style lang="scss" scoped>
.input-sec {
    height: calc(100vh - 56px);
    margin-left: 265px;
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.crud {
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 15px;
    padding: 30px;

    &-title {
        color: #EA580C;
        font-size: 22px;
        font-weight: 600;
    }

    &-list {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        padding: 15px 0;

        & li {

            display: flex;
            flex-direction: column;
            row-gap: 2px;
        }

        & span {
            color: #171717;
            font-size: 14px;
            font-weight: 600;
        }

        & input {
            background: #F5F5F5;
            padding: 10px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #D4D4D4;
            font-size: 16px;
            font-weight: 600;
            color: #171717;
        }

        &_num {
            display: flex;
            flex-direction: column;

            & .column {
                display: flex;
                column-gap: 5px;

                & div {
                    display: flex;
                    flex-direction: column;
                    row-gap: 2px;
                }
            }
        }
    }
    
    &-div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
        
    &-see{
        display: inline-flex;
        padding: 10px 15px;
        border-radius: 5px;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        background: #B5A8F0;
        
        &:hover{
            color: #EA580C;
        }
    }
    
    &-btn {
        display: inline-flex;
        padding: 10px 15px;
        border-radius: 5px;
        background: #1D4ED8;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;

        &:hover {
            color: #EA580C;
        }
    }

}
</style>