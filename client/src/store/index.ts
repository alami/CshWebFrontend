import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import { RootState } from './state';

Vue.use(Vuex)

const options: StoreOptions<RootState> = {
  state: {
    groups:[
      {id: 1, name: 'Sample Group 1'}, {id: 2, name: 'Sample Group 2'},
      {id: 3, name: 'Sample Group 3'}, {id: 4, name: 'Sample Group 4'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
export default new Vuex.Store(options);

