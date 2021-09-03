<template>
  <nav class="navigation">
    <div class="navigation-menu" :class="menuStatus()">
      <Button
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        :class="`${buttonClass} ${link.highlight ? 'is-higlight' : ''}`"
      >
        {{ link.name }}
      </Button>
    </div>
    <div
      v-if="useBurger"
      class="navigation-burger"
      data-target="main-menu"
      @click="triggerBurger"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </nav>
</template>

<script>
/**
 * Menu de navigation repliable.
 *
 * Améliorations :
 *  - gestion des groupes de liens (meus dépliants)
 *  - ne pas utiliser `g-link` pour les liens externes (commence par `http` ou
 *    possède `://`), ni pour les ancres (commence par `#`), ni pour les
 *    addresses email (`mailto:)
 */
import Button from '@/components/Elements/Button.vue'
export default {
  name: 'Navigation',
  components: { Button },
  props: {
    /**
     * Exemple de liste de liens :
     *
     * ~~~
     * [
     *  {
     *    name: 'Example A',
     *    to: 'http://example.com',
     *    highlight: true
     *  },
     *  {
     *    name: 'Example B',
     *    to: 'http://example.com'
     *  }
     * ]
     * ~~~
     */
    links: {
      type: Array,
      required: true
    },
    buttonClass: {
      type: String,
      default: ''
    },
    useBurger: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuActived: false
    }
  },
  methods: {
    /**
     * Activation du menu Burger
     *
     * @arg Event
     * @type Boolean
     */
    triggerBurger (event) {
      event.stopPropagation()
      this.menuActived = !this.menuActived
      return true
    },
    /**
     * Status actuel du bouton
     *
     * @type String
     */
    menuStatus () {
      return this.menuActived || !this.useBurger ? 'is-active' : ''
    }
  }
}
</script>
<style>
/**
 * Navigation & burger menu
 *
 * @uses
 *  - --md
 *  - --color-grey
 *  - --color-grey-darker
 */
.navigation-link {
  display: block;
  text-align: center;
}

/* Burger menu */
.navigation-burger {
  position: relative;
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;
}

.navigation-burger span {
  position: absolute;
  left: calc(50% - 8px);
  width: 1rem;
  height: 1px;
  background-color: var(--color-grey);
}
.navigation-burger:hover span { background-color: var(--color-grey-darker); }
.navigation-burger span:nth-child(1) { top: calc(50% - 6px); }
.navigation-burger span:nth-child(2) { top: calc(50% - 1px); }
.navigation-burger span:nth-child(3) { top: calc(50% + 4px); }

.navigation-menu.is-active { display: flex; }
.navigation-menu {
  display: none;
  /* flex-direction: column; */
  }

@media (--tablet) {
  .navigation,
  .navigation-menu {
    display: flex;
    flex-wrap: wrap;
  }

  .navigation-link { text-align: left; }

  .navigation-links:not(:last-child),
  .navigation-link:not(:last-child) { margin-right: 1em; }
  .navigation-inline .navigation-link { display: inline-block; }

  .navigation-burger { display: none; }
}

</style>
