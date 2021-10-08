<template>
  <span>{{ group.name }}</span>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GroupViewModel } from './models'

@Component({
  components: {}
})
export default class GroupDetail extends Vue {
  @Prop() private group!: GroupViewModel;
}
</script>