
export interface DualListItem {
    label: string;
    value: any;
    selected?: boolean
}

export interface DualListGroupItem {
    group: string;
    items: DualListItem[];
}