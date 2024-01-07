import axios from "axios";
import * as T from "./types";

export const registerPartner = async ({
    name,
    description,
    repositoryGit,
    urlDoc,
    projects,
    clients
}: T.RegisterPartner) => {
    const { data } = await axios.post(
        "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners",
        { name, description, repositoryGit, urlDoc, projects, clients }
    );

    return data as T.GetPartnersResponse;
};

export const getPartners = async () => {
    const { data } = await axios.get(
        "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners"
    );

    return data as T.GetPartnersResponse;
};

export const editPartner = async ({
    id,
    name,
    description,
    repositoryGit,
    urlDoc,
    clients,
    projects
}: T.EditPartner) => {
    const { data } = await axios.put(
        `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`,
        { name, description, repositoryGit, urlDoc, clients, projects }
    );

    return data as T.EditPartnerResponse;
};

export const deletePartner = async ({ id }: T.DeletePartner) => {
    const { data } = await axios.delete(
        `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`
    );

    return data as T.DeletePartnerResponse;
};
