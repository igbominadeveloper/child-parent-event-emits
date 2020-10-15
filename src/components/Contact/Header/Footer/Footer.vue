<template>
  <div>
    <p>Footer</p>
    <button @click="$parent.$emit('go-to-parent')">Click</button>
  </div>
</template>

<script>
export default {};
</script>
