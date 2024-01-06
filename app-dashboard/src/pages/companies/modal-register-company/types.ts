export type Props = {
    refetch: () => void;
};

export type MutationProps = {
    name: string;
    collaborators: number;
    isActive: string;
};

export type Schema = {
    name: string;
    collaborators: number;
    isActive: string;
};
