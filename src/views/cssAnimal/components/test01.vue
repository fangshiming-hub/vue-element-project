
<template>
  <div>
    <h3>这是test01组件</h3>
    <el-select
      v-model="selected"
      value-key="id"
      filterable
      remote
      :remote-method="remoteSearch"
      collapse-tags
    >
      <!-- multiple -->
      <el-option
        v-for="option in options"
        :key="option.id"
        :label="option.name"
        :value="option"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "test-01",
  data() {
    return {
      selected: {
        id: "Michigan",
        name: "Michigan",
      },
      options: [],
      options4: [
        { id: 11, name: "11" },
        { id: 22, name: "22" },
        { id: 33, name: "33" },
        { id: 44, name: "44" },
        { id: 55, name: "55" },
      ],
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      list: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        console.log(this.$scopedSlots.header());
      }, 1000);
    });
    this.list = this.states.map((item) => {
      return { id: item, name: item };
    });
    this.options = this.options4.map((item) => item);

    // console.log(this.$scopedSlots.header());
  },
  methods: {
    remoteSearch(query) {
      if (query) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.options4.concat(
            this.list.filter((item) => {
              return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
          );
          console.log(this.options, 555);
        }, 200);
      } else {
        this.options = this.options4;
      }
    },
  },
};
</script>

<style>
</style>