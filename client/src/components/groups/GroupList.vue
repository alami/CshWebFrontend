<template>
  <ul>
    <li v-for="group in groups" v-bind:key="group.id">
      <GroupDetail v-bind:group="group" />
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
}
</script>