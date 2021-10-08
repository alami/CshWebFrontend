import Vue from 'vue'
import Vuex, {ActionContext, StoreOptions} from 'vuex'
import {Group, RootState} from './state';

Vue.use(Vuex)

let currentId: number = 0
const options: StoreOptions<RootState> = {
  state: {
    groups:[]
  },
  mutations: {
    setGroups (state: RootState,groups: Group[]):void {
      state.groups = [...groups]
    },
    add (state: RootState,group: Group):void {
      group.id = ++currentId;
      state.groups = [...state.groups, group];
    },
    update(state: RootState,group: Group):void {
      const index = state.groups.findIndex(g => g.id === group.id);
      state.groups = [...state.groups.slice(0, index), group, ...state.groups.slice(index + 1, state.groups.length)];
    },
    remove (state: RootState,groupId: number):void {
      state.groups = state.groups.filter(g => g.id !== groupId);
    }
  },
  actions: {
    loadGroups({commit}): void {
      //TODO: fetch groups from the api
      const groups = [
        {id: ++currentId, name: 'Sample Group 111'}, {id: ++currentId, name: 'Sample Group 222'},
        {id: ++currentId, name: 'Sample Group 333'}, {id: ++currentId, name: 'Sample Group 444'}
      ]
      commit('setGroups', groups)
    },
    add (context:ActionContext<RootState, RootState>, group: Group) : void {
      //TODO: make the api request before commiting to the store
      context.commit('add',group)
    },
    update ({commit}, group:Group): void {    //TODO:...
      commit('update',group)
    },
    remove ({commit}, groupId:number): void { //TODO:...
      commit('remove',groupId)
    },
  },
  modules: {
  }
}
export default new Vuex.Store(options);

