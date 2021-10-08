<template>
  <GroupList v-bind:groups="groups" v-on:update="onUpdate" v-on:remove="onRemove" v-on:add="onAdd" />
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
  private currentId: number = 3;
  private groups: GroupViewModel[] = [
      {id: 1, name: 'Sample Group 1'}, {id: 2, name: 'Sample Group 2'},
      {id: 3, name: 'Sample Group 3'}, {id: 4, name: 'Sample Group 4'}
  ];
  private onUpdate(group: GroupViewModel): void {
    const index = this.groups.findIndex(g => g.id === group.id);
    this.groups = [...this.groups.slice(0, index), group, ...this.groups.slice(index + 1, this.groups.length)];
  }

  private onRemove(groupId: number): void {
    this.groups = this.groups.filter(g => g.id !== groupId);
  }

  private onAdd(group: GroupViewModel): void {
    group.id = ++this.currentId;
    this.groups = [...this.groups, group];
  }
}
</script>