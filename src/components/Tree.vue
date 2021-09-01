<template>
  <ul>
    <li
      v-for="(file, index) in tree"
      :key="index"
    >
      {{ file.fileInfo.directory }}
      {{ file.fileInfo.path }}
      <template v-if="file.title">
        {{ file.title }}
        {{ file.path }}
      </template>
      <Tree
        v-if="file.files"
        :tree="file.files"
      />
    </li>
  </ul>
</template>
<script>
import Tree from '~/components/Tree.vue'
export default {
  name: "Tree",
  props: {
    tree: {
      type: Array,
      required: true
    }
  },
  components: {
    Tree
  }
}
</script>
