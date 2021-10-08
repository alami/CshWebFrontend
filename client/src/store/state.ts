export interface Group {
    id: number;
    name: string;
}

export interface RootState {
    groups: Group[];
}