<template>
<span>{{ group.name }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { GroupViewModel } from './models'

export default class GroupDetail extends Vue {
  private group!: GroupViewModel;
}
</script>