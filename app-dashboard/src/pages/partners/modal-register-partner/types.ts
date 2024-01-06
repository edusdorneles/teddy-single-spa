export type Props = {
    refetch: () => void;
};

export type MutationProps = {
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    projects: string;
    clients: string;
};

export type Schema = {
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    projects: string;
    clients: string;
    createdAt: Date;
};
