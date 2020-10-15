<template>
  <div>
    <p>Contact Page</p>
    <Header />
    <router-link :to="{ name: 'Hello' }">Home Page</router-link>
  </div>
</template>

<script>
import structure from "./components.json";
import Header from "./Header/Header";

export default {
  data: () => ({
    structure,
  }),
  components: {
    Header,
  },
  methods: {
    childEventHandler() {
      console.log("All the way from grandchild");
    },
  },
  created() {
    this.$on("go-to-parent", this.childEventHandler);
  },
};
</script>
