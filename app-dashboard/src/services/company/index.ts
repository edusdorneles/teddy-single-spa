import axios from "axios";
import * as T from "./types";

export const getCompanies = async () => {
    const { data } = await axios.get(
        "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
    );

    return data as T.GetCompaniesResponse;
};

export const deleteCompany = async ({ id }: T.DeleteCompany) => {
    const { data } = await axios.delete(
        `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`
    );

    return data as T.DeleteCompanyResponse;
};
