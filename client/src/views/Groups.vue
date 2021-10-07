<template>
  <GroupList />
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import GroupList from '@/components/groups/GroupList.vue';

@Component({
  components: {
    GroupList
  }
})
export default class Groups extends Vue {
}
</script>

<style scoped>

</style>