import axios from "axios";
import * as T from "./types";

export const getCompanies = async () => {
    const { data } = await axios.get(
        "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
    );

    return data as T.GetCompaniesResponse;
};
