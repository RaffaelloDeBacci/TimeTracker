export class Project {
    id: number;
    name: string;
    projectItems: ProjectItem[];
}

export class ProjectItem {
    id: number;
    username: string;
    token: string;
}