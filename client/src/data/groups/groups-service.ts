import {GroupsEndpoint} from "@/data/groups/groups-endpoint";
import {GroupModel} from "@/data/groups/models/group-model";
import axios from 'axios';

// TODO: handle eventual errors

export class GroupsService implements GroupsEndpoint{
    private readonly baseHost: string = 'http://localhost:5000';
    private readonly baseUrl: string = '/groups';//'/api/groups';

    public async getAll(): Promise<GroupModel[]> {
        const response = await axios.get(`${this.baseHost}${this.baseUrl}`);//this.baseUrl);
        return response.data;
    }

    public async getById(id: number): Promise<GroupModel> {
        const response = await axios.get(`${this.baseHost}${this.baseUrl}/${id}`);
        return response.data;
    }

    public async add(group: GroupModel): Promise<GroupModel> {
        const response = await axios.post(`${this.baseHost}${this.baseUrl}`, group);
        return response.data;
    }

    public async update(group: GroupModel): Promise<GroupModel> {
        const response = await axios.put(`${this.baseHost}${this.baseUrl}/${group.id}`, group);
        return response.data;
    }

    public async remove(id: number): Promise<void> {
        const response = await axios.delete(`${this.baseHost}${this.baseUrl}/${id}`);
    }
}