export type RegisterPartner = {
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    projects: string;
    clients: string;
};

export type GetPartnersResponse = [
    {
        id: number;
        createdAt: Date;
        name: string;
        description: string;
        repositoryGit: string;
        urlDoc: string;
        clients: string;
        projects: string;
    }
];

export type EditPartner = {
    id: number;
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    clients: string;
    projects: string;
};

export type EditPartnerResponse = {
    id: number;
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    clients: string;
    projects: string;
};

export type DeletePartner = {
    id: number;
};

export type DeletePartnerResponse = {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    clients: string;
    projects: string;
};
