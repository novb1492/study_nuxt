import todoMutations from "./todo/todoMutations";
import todoActions from "./todo/todoActions";
export const state = () => ({
    counter: 1 
    }); 
    
export const mutations =  todoMutations;
export const actions = todoActions;

export const getters = {
  getName: (state) => {
    return state.counter
  }
}