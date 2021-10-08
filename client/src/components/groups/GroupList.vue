<template>
  <ul>
    <li v-for="group in groups" v-bind:key="group.id">
      <GroupDetail v-bind:group="group"  v-on:update="onUpdate" v-on:remove="onRemove" />
    </li>
  </ul>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import GroupDetail from './GroupDetail.vue';
import {GroupViewModel} from "@/components/groups/models";

@Component({
  components: {
    GroupDetail
  }
})
export default class GroupList extends Vue {
  @Prop() private groups!: GroupViewModel[];

  private onUpdate(group: GroupViewModel): void {
    console.log(group);
    this.$emit('update', group);
  }

  private onRemove(groupId: number): void {
    console.log(groupId);
    this.$emit('remove', groupId);
  }

  private onAdd(group: GroupViewModel): void {
    this.$emit('add', group);
  }
}
</script>