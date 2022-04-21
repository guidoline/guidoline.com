<template>
  <nav v-if="links" class="pagination">
    <z-button
      v-if="links.before"
      :to="links.before.to"
      :icon="iconPrevious"
      :class="linkClasses"
    >
      {{ links.before.name}}
    </z-button>
    <z-button
      v-if="links.after"
      :to="links.after.to"
      :icon-right="iconNext"
      :class="linkClasses"
    >
      {{ links.after.name}}
    </z-button>
  </nav>
  <nav v-else-if="folioCount" class="pagination">
    <z-button
      :disabled="!first"
      :icon="iconFirst"
      @click.prevent="goTo(first)"
      :href="`${routePrefix}${first}`"
      :sr="true"
      :title="linkLabelFirst"
      :aria-label="linkLabelFirst"
      :class="linkClasses"
    >
      {{ linkLabelFirst }}
    </z-button>
    <z-button
      :disabled="!previous"
      :icon="iconPrevious"
      @click.prevent="goTo(previous)"
      :href="`${routePrefix}${previous}`"
      :sr="true"
      :title="linkLabelPrevious"
      :aria-label="linkLabelPrevious"
      :class="linkClasses"
    >
      {{ linkLabelPrevious }}
    </z-button>
    <template
      v-for="(link, index) in folioLinks"
      :key="index"
    >
      <z-icon
        v-if="link.ellipsis"
        :icon="iconEllipsis"
      />
      <z-button
        v-else
        :href="link.to"
        :disabled="link.disabled"
        :title="link.label"
        :aria-label="link.label"
        @click.prevent="goTo(link.folio)"
        :class="linkClasses"
      >
         {{ link.folio }} 
      </z-button>
    </template>

    <z-button
      :disabled="!next"
      :icon="iconNext"
      @click.prevent="goTo(next)"
      :href="`${routePrefix}${next}`"
      :sr="true"
      :title="linkLabelNext"
      :aria-label="linkLabelNext"
      :class="linkClasses"
    >
      {{ linkLabelNext }}
    </z-button>
    <z-button
      :disabled="!last"
      :icon="iconLast"
      @click.prevent="goTo(folioCount)"
      :href="`${routePrefix}${last}`"
      :sr="true"
      :title="linkLabelLast"
      :aria-label="linkLabelLast"
      :class="linkClasses"
    >
      {{ linkLabelLast }}
    </z-button>
  </nav>
</template>
<script setup>
import { computed } from "vue"

const props = defineProps({
  // With explicit links
  links: {
    type: Object,
    default: null
  },
  // With folio
  // /Volumes/Big Mama/Sites/la-fabrik-a-yoops/src/components/Elements/Pagination.vue
  folioCount: {
    type: Number,
    default: 0
  },
  // Current folio
  folio: {
    type: Number,
    default: 1
  },
  // Pour une navigation SSG sans JS.
  routePrefix: {
    type: String,
    default: '/'
  },
  linkClasses: {
    type: String,
    default: 'text'
  },
  // À revoir: pas possible de passer
  // un paramètre de façon programatique avec
  // la récupération auto des classes…
  linkType: {
    type: String,
    default: 'outline'
  },
  linkLabel: {
    type: String,
    default: 'Go to page $folio'
  },
  linkLabelFirst: {
    type: String,
    default: 'Go to first page'
  },
  linkLabelPrevious: {
    type: String,
    default: 'Go to previous page'
  },
  linkLabelNext: {
    type: String,
    default: 'Go to next page'
  },
  linkLabelLast: {
    type: String,
    default: 'Go to last page'
  },
  iconFirst: {
    type: String,
    default: 'ChevronDoubleLeft'
  },
  iconPrevious: {
    type: String,
    default: 'ChevronLeft'
  },
  iconNext: {
    type: String,
    default: 'ChevronRight'
  },
  iconLast: {
    type: String,
    default: 'ChevronDoubleRight'
  },
  iconEllipsis: {
    type: String,
    default: 'DotsHorizontal'
  },
})
const first = computed(() => props.folio <= 1 ? null : 1 )
const previous = computed(() => props.folio <= 1 ? null : props.folio - 1 )
const next = computed(() =>
  props.folio >= props.folioCount ? null : props.folio + 1
)
const last = computed(() =>
  props.folio >= props.folioCount ? null : props.folioCount
)

const emit = defineEmits(['change-folio'])
const goTo = (folio) => {
  emit('change-folio', folio)
  return false
}
// const emit = defineEmits(['update:menuOpen'])
// watch(() => props.menuOpen, (state) => emit('update:menuOpen', state))

//   methods: {
//     goTo(currentPage) {
//       // Pass offset and limit here
//       const offset = Math.max(0, Math.round((currentPage -1) * this.perPage))
//       const limit = Math.min(this.totalRecords, offset + this.perPage)
//       this.$emit('page-change', currentPage, offset, limit)
//     }
//   }

const folioLinks = computed(() => {
  const links = []
  const offset = 2
  let count = 0
  while (count < props.folioCount) {
    count ++
    if (
      (
        count <= props.folio + offset &&
        count >= props.folio - offset
      )
      // Pour compter l'offset pour les liens des extrêmes
      // || count <= offset
      // || count > props.folioCount - offset
      // Pour n'avoir qu'un lien pour chaque extrême
      // || count === 1
      // || count === props.folioCount
    ) {
      links.push({
        folio: count,
        to: `${props.routePrefix}${count}`,
        label: props.linkLabel.replace('$folio', count),
        disabled: count === props.folio,
      })
    } else if (
      count === props.folio + offset +1 ||
      count === props.folio - offset -1
    ) {
      links.push({
        ellipsis: true
      })
    }
  }
  return links
})
</script>
<style scoped>
.pagination { @apply flex justify-center items-center py-4; }
</style>
