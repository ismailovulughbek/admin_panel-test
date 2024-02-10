import {
  defineStore
} from 'pinia'
import axios from "axios";

export const useProductStore = defineStore('product', {
  state: () => ({
    baseUrl: "http://94.158.54.194:9092/api/product",
    productAll: null,
    editEl: [] 
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}`
        })
        this.productAll = await res.data
      } catch (error) {
        console.log("getProduct" + Error);
      }
    },
    async getEditEl(id) {
      try {
        const res = await axios({
          method: "GET",
          url: `${this.baseUrl}`
        })
        this.editEl = await res.data.find((el) => el.id == id)
      } catch (error) {

      }
    },
    async putProduct(product) {
      try {

        const res = await axios.put(`${this.baseUrl}`, {
          "id": parseInt(product.value.id),
          "product_type_id": parseInt(product.value.product_type_id),
          "name_uz": product.value.name_uz,
          "cost": Number(product.value.cost),
          "address": product.value.address,
          "created_date": product.value.created_date
          
        });
        
        if(res.status == 200){
          alert("Successfully updated")
        }
      } catch (error) {
        if(res.status != 200){
          alert("Failed")
        }
        console.error("putProduct Error:", error);
      }
    },
    async postProduct(elemList) {
      try {
        const res = await axios.post(`${this.baseUrl}`, {
          
          "product_type_id": parseInt(elemList.product_type_id),
          "name_uz": elemList.name_uz,
          "cost": Number(elemList.cost),
          "address": elemList.address,
          "created_date": elemList.created_date
          
        })
        if (res.status == 200 || res.status == 202) {
          alert("Post created Seccessfully")
        }
      } catch (error) {
        console.log("postProduct " + Error);
        if (res.status == 400) {
          alert("Error creating post!!!")
        }
      }
    },
    async delProduct(id) {
      try {
        const res = await axios({
          method: "DELETE",
          url: `${this.baseUrl}/${id}`
        })
        if (res.status == 200 || res.status == 204) {
          let filProduct = this.productAll.filter((el) => el.id != id)

          this.productAll = filProduct
        }

      } catch (error) {
        console.log("delProduct" + Error);
      }
    }
  }
})