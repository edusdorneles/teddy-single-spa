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
