export type Props = {
    id: number;
    name: string;
    collaborators: number;
    isActive: any;
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
