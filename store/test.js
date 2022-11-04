import testMutations from "./test/testMutations";
import testActions from "./test/testActions";
export const state = () => ({
    counter: 0 
    }); 
    
export const mutations = testMutations;
export const actions = testActions;
export const getters = {
  getName: (state) => {
    return state.counter
  }
}