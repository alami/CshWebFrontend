import { ActionContext, ActionTree } from "vuex";
import { RootState } from "@/store/state";
import { GroupsState, Group } from "@/store/modules/groups/state";
import { GroupsService } from "@/data/groups/groups-service";

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove'
};

const groupsService = new GroupsService();

export const actions: ActionTree<GroupsState, RootState> = {
    async loadGroups({commit}): Promise<void> {
        const groups = await groupsService.getAll();
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
