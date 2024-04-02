import { mapState, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter.store.ts";

export default {
  computed: {
    // gives access to this.count inside the component
    // same as reading from store.count
    ...mapState(useCounterStore, ["count"]),
    // same as above but registers it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: "count",
      // you can also write a function that gets access to the store
      double: (store) => store.count * 2,
      // it can have access to `this` but it won't be typed correctly...
      magicValue(store) {
        return store.someGetter + this.count + this.double;
      },
      // gives access to this.count inside the component and allows setting it
      // this.count++
      // same as reading from store.count
      ...mapWritableState(useCounterStore, ["count"]),
      // same as above but registers it as this.myOwnName
      ...mapWritableState(useCounterStore, {
        myOwnName: "count"
      })
    })
  }
};
