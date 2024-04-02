export default defineComponent({
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ["count", "double"])
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ["increment"])
  }
});
