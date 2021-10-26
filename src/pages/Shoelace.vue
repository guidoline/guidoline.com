<template>
  <Layout>
    <div class="container">
      <h1>Shoelace test</h1>
      <sl-input
        :value="inputTest"
        @input="name = $event.target.value"
      />
      <sl-input v-sl-model="inputTest"></sl-input>
      <sl-button
        type="primary"
        @click="setupSomeData"
      >
        Setup some data
      </sl-button>
      <pre>
        inputTest : {{ inputTest }}
      </pre>
    </div>
  </Layout>
</template>
<script>
export default {
  name: 'Shoelace',
  data () {
    return {
      inputTest: 'Some data'
    }
  },
  methods: {
    setupSomeData () {
      this.inputTest = 'Some new data'
    }
  }
}
</script>
