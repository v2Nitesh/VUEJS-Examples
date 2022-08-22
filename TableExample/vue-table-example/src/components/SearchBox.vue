<template>
  Table Data
  <input v-model="searchText" @input="searchInput" />
  <button type="text" @click="searchInput">Search</button>
  <div v-if="rows.length > 0">
          <!-- searchFn: myFunc -->
      <!-- trigger: 'enter', -->

    <vue-good-table :columns="columns" :rows="rows" 
    :search-options="{
      enabled: true,
      searchFn: myFunc
    }"
    />
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
      onSearch(params) {
        console.log("params ==>",params);
    // params.searchTerm - term being searched for
    // params.rowCount - number of rows that match search
  },
   myFunc(row, col, cellValue, searchTerm){
    console.log("myFunc ==>",col, searchTerm);
    return cellValue === 'my value';
  },
  },
  async created() {
     const response = await axios.get(`${apiBaseUri}jewelery`);

      this.rows = response.data;
      console.log("response ==>", this.rows);

  }
};
</script>