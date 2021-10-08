import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/store/state";
import { GroupsState, Group } from "@/store/modules/groups/state";

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove'
};

export const actions: ActionTree<GroupsState, RootState> = {
    loadGroups({commit}): void {
        //TODO: fetch groups from the api
        const groups = [
            {id: 1, name: 'Sample Group 111'}, {id: 2, name: 'Sample Group 222'},
            {id: 3, name: 'Sample Group 333'}, {id: 4, name: 'Sample Group 444'}
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
}
