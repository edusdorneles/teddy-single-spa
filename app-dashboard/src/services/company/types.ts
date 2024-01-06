export type GetCompaniesResponse = [
    {
        id: number;
        createdAt: string;
        companyName: string;
        collaboratorsCount: number;
        isActive: boolean;
        lastSubmit: Date;
    }
];

export type RegisterCompany = {
    name?: string;
    collaborators?: number;
    isActive?: string;
};

export type RegisterCompanyResponse = {
    id: string;
    createdAt: Date;
    companyName: string;
    collaboratorsCount: number;
    isActive: boolean;
    lastSubmit: Date;
};

export type EditCompany = {
    id: number;
    name?: string;
    collaborators?: number;
    isActive?: string;
};

export type EditCompanyResponse = {
    id: string;
    createdAt: Date;
    companyName: string;
    collaboratorsCount: number;
    isActive: boolean;
    lastSubmit: Date;
};

export type DeleteCompany = {
    id: number;
};

export type DeleteCompanyResponse = {
    id: string;
    createdAt: Date;
    companyName: string;
    collaboratorsCount: number;
    isActive: boolean;
    lastSubmit: Date;
};
