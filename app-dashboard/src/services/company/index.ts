import axios from "axios";
import * as T from "./types";

export const registerCompany = async ({ name, collaborators, isActive }: T.RegisterCompany) => {
    const companyIsActive = isActive === "true" ? true : false;

    const { data } = await axios.post(
        "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies",
        { companyName: name, collaboratorsCount: collaborators, isActive: companyIsActive }
    );

    return data as T.RegisterCompanyResponse;
};

export const getCompanies = async () => {
    const { data } = await axios.get(
        "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
    );

    return data as T.GetCompaniesResponse;
};

export const editCompany = async ({ id, name, collaborators, isActive }: T.EditCompany) => {
    const companyIsActive = isActive === "true" ? true : false;

    const { data } = await axios.put(
        `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`,
        { companyName: name, collaboratorsCount: collaborators, isActive: companyIsActive }
    );

    return data as T.EditCompanyResponse;
};

export const deleteCompany = async ({ id }: T.DeleteCompany) => {
    const { data } = await axios.delete(
        `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`
    );

    return data as T.DeleteCompanyResponse;
};
