# vite-plugin-vue-svg

Vite plugin to use svg files as Vue components.

## Requirements

- Vite 2.*
- Vue 3.*

## Installation

```shell
npm i -D @vuetter/vite-plugin-vue-svg
```

## Usage

`vite.config.js`:

```shell
import pluginVue from '@vitejs/plugin-vue';
import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';

export default {
    plugins: [
        pluginVue(),
        pluginSvgVue(),
    ],
};
```

Any vue component:

```vue
<template>
    <h1>Icons</h1>
    <IconExample />
</template>

<script>
import IconExample from '/~/assets/icon-example.svg?inline';
export default {
    components: { IconExample },
};
</script>
```

You can specify html element to wrap svg:

```js
pluginSvgVue({
    htmlWrapper: {
        tagName: 'span',
        attrs: {
            class: 'ui-icon',
        },
    },
})
```

To configure svgo optimization:

```js
pluginSvgVue({
    svgo: { ... }, // https://github.com/svg/svgo#configuration
})
```

or set `svgo: false` to disable optimization.
