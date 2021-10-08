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
  //private groups: GroupViewModel[] = this.$store.state.groups;
  private get groups(): GroupViewModel[] {
    return this.$store.state.groups;
  }
  private onUpdate(group: GroupViewModel): void {
    this.$store.commit('update', group)
  }

  private onRemove(groupId: number): void {
    this.$store.commit('remove', groupId)
  }

  private onAdd(group: GroupViewModel): void {
    this.$store.commit('add', group)
  }
}
</script>