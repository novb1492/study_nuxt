<template lang="">
    <div>
        mypage
        {{counter}}
        {{counter2}}
        <button @click="increment">increment</button>
        <button @click="increment2">increment2</button>
        <button @click="increment3(2)">incrementa</button>
        <button @click="increment4(3)">increment2a</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    computed: {
        ...mapGetters( "test",{
            counter:"getName"
        }),
        ...mapGetters( "todo",{
            counter2:"getName"
        }),
    },
    methods:{
        ...mapMutations("test", {
            increment: "increment",
        }),
        ...mapMutations("todo", {
            increment2: "increment",
        }),
        ...mapActions( "test",{
            increment3: "increment",
        }),
        ...mapActions("todo", {
            increment4: "increment",
        }),
    }
}
</script>
<style lang="">
    
</style>