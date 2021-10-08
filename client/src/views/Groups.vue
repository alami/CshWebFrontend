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
  public mounted(): void {
    this.$store.dispatch('loadGroups')
  }

  private get groups(): GroupViewModel[] {
    return this.$store.state.groups;
  }
  private onUpdate(group: GroupViewModel): void {
    this.$store.dispatch('update', group)
  }

  private onRemove(groupId: number): void {
    this.$store.dispatch('remove', groupId)
  }

  private onAdd(group: GroupViewModel): void {
    this.$store.dispatch('add', group)
  }
}
</script>