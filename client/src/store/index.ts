import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {Group, RootState} from './state';

Vue.use(Vuex)

let currentId: number = 0
const options: StoreOptions<RootState> = {
  state: {
    groups:[
      {id: ++currentId, name: 'Sample Group 111'}, {id: ++currentId, name: 'Sample Group 222'},
      {id: ++currentId, name: 'Sample Group 333'}, {id: ++currentId, name: 'Sample Group 444'}
    ]
  },
  mutations: {
    add (state,group: Group):void {
      group.id = ++currentId;
      state.groups = [...state.groups, group];
    },
    update(state,group: Group):void {
      const index = state.groups.findIndex(g => g.id === group.id);
      state.groups = [...state.groups.slice(0, index), group, ...state.groups.slice(index + 1, state.groups.length)];
    },
    remove (state,groupId: number):void {
      state.groups = state.groups.filter(g => g.id !== groupId);
    }
  },
  actions: {
  },
  modules: {
  }
}
export default new Vuex.Store(options);

