<template>
    <div class="product">
        <div class="container">
            <div class="product-sec">
                <h3 class="product-sec_title">Your product</h3>
                <div class="product-sec_notilla">
                    <img src="@/assets/images/circle.svg" alt="">
                    <p>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
                </div>

                <div class="product-sec_card">
                    <div class="product-sec_card-type grid-temp">
                        <span>Product name</span>
                        <span>Income</span>
                        <span>Adress</span>
                        <span>Creation date</span>
                        <span>Edit/Delete</span>
                    </div>

                    <div class="product-sec_card-items"
                    v-for="el in products" :key="el.id">
                        <div class="product-sec_card-items_item grid-temp">
                            <span>{{ el.name_uz }}</span>
                            <span class="numb">{{ el.cost }}</span>
                            <span>{{ el.address }}</span>
                            <span class="numb">{{ el.created_date }}</span>
                            <span 
                            class="product-sec_card-items_item-btns">
                            <RouterLink
                            :to="{path: '/product/'+el.id+'/edit'}" 
                            class="edit btn">
                                <img src="@/assets/images/iconPAP.svg" alt="">
                                Edit
                            </RouterLink>
                            <button @click="productDel(el.id)"
                            class="delete btn">
                                <img src="@/assets/images/iconPAP.svg" alt="">
                                Delete
                            </button>
                        </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useProductStore } from "@/stores/product.js";

const productStore = useProductStore()
const products = computed(()=> productStore.productAll)
const productDel = (id) => {
    let res = confirm(`Are you sure you want to delete`)
    if (res) {
        productStore.delProduct(id)
    }
}
onMounted(()=>{
    productStore.getProducts()
})
</script>
