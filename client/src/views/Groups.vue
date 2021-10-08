<template>
  <GroupList v-bind:groups="groups" />
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import GroupList from '@/components/groups/GroupList.vue';
import {GroupViewModel} from '@/components/groups/models';

@Component({
  components: {
    GroupList
  }
})
export default class Groups extends Vue {
  private groups: GroupViewModel[] = [
      {id: 1, name: 'Sample Group 1'}, {id: 2, name: 'Sample Group 2'},
      {id: 3, name: 'Sample Group 3'}, {id: 4, name: 'Sample Group 4'}
  ];
}
</script>