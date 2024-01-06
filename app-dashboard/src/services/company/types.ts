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
