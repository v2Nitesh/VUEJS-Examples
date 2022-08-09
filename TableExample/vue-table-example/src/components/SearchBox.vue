<template>
  Table Data
  <input v-model="searchText" @input="searchInput" />
  <button type="text" @click="searchInput">Search</button>
  <div v-if="rows.length > 0">
    <vue-good-table :columns="columns" :rows="rows" />
  </div>
</template>

<script>
import "vue-good-table-next/dist/vue-good-table-next.css";
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";

const apiBaseUri = "https://fakestoreapi.com/products/category/";

export default {
  name: "SearchBox",
  components: {
    VueGoodTable,
  },
  data() {
    return {
      searchText: "",
      columns: [
        {
          label: "Id",
          field: "id",
        },
        {
          label: "Title",
          field: "title",
          //   type: "number",
        },
        {
          label: "Price",
          field: "price",
          type: "number",
        },
        {
          label: "Description",
          field: "description",
          //   type: "number",
        },
      ],
      rows: [],
    };
  },
  methods: {
    async searchInput() {
      // jewelery
      console.log("response ==> Test", this.searchText);

      const response = await axios.get(`${apiBaseUri}${this.searchText}`);

      this.rows = response.data;
      console.log("response ==>", this.rows);
    },
  },
};
</script>