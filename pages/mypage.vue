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
    async asyncData(context) {
      // const data = await context.$axios.$get(...)
      // `todos` 는 data() 안에 선언되어 있지 않아도 됩니다.
      return { todos: [{title:'login',count:100}]};
      // `todos` 는 local data에 병합(merge)됩니다.
    },
    mounted(){
        //asyncData 값할당 받아서 store state 접근 후변경가능 
        this.setC(this.todos[0].count);
    },
    methods:{
        ...mapMutations("test", {
            increment: "increment",
        }),
        ...mapMutations("todo", {
            increment2: "increment",
        }),
        ...mapMutations("todo", {
            setC: "setC",
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