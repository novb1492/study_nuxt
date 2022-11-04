export const state = () => ({
    counter: 1 
    }); 
    
export const mutations = { 
     increment (state) { 
       state.counter++; 
     } ,
     increment2 (state,num) { 
        state.counter+=num; 
    } 
   }
   export const actions = { 
    increment (context,num) { 
        context.commit('increment2', num);
    } 
}
export const getters = {
  getName: (state) => {
    return state.counter
  }
}