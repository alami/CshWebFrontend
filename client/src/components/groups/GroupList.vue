<template>
  <p>List</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GroupDetail from './GroupDetail.vue';

@Component({
  components: {
    GroupDetail
  }
})
export default class GroupList extends Vue {}
</script>

<style scoped>

</style>