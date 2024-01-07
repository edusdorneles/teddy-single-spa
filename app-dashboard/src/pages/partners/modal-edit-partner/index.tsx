import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { GrayInput, Modal, SecondaryButton } from "../../../components";
import { editPartner } from "../../../services";
import { closeModalById } from "../../../utils";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalEditPartner = ({
    id,
    name,
    description,
    repositoryGit,
    urlDoc,
    projects,
    clients,
    refetch
}: T.Props) => {
    const { reset, control, setValue, handleSubmit } = useForm<T.Schema>({
        defaultValues: { name, description, repositoryGit, urlDoc, projects, clients }
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ["edit-partner"],
        mutationFn: ({
            name,
            description,
            repositoryGit,
            urlDoc,
            projects,
            clients
        }: T.MutationProps) =>
            editPartner({ id, name, description, repositoryGit, urlDoc, projects, clients }),
        onSuccess: () => {
            reset();
            refetch();
            toast("Parceiro editado com sucesso.", { type: "success" });
            closeModalById(`edit-partner-${id}`);
        },
        onError: () => {
            toast("Erro ao editar parceiro.", { type: "error" });
        }
    });

    const onSubmit = (data: T.Schema) => {
        if (
            !data.name ||
            !data.description ||
            !data.repositoryGit ||
            !data.urlDoc ||
            !data.projects
        ) {
            return toast("Preencha todos os campos.", { type: "warning" });
        }

        mutate({
            name: data.name,
            description: data.description,
            repositoryGit: data.repositoryGit,
            urlDoc: data.urlDoc,
            projects: data.projects,
            clients: data.clients
        });
    };

    useEffect(() => {
        setValue("name", name);
        setValue("description", description);
        setValue("repositoryGit", repositoryGit);
        setValue("urlDoc", urlDoc);
        setValue("projects", projects);
        setValue("clients", clients);
    }, [name, description, repositoryGit, urlDoc, projects, clients]);

    return (
        <Modal id={`edit-partner-${id}`} title="Editar parceiro">
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Nome:"
                            value={value}
                            onChange={onChange}
                            placeholder="Nome..."
                        />
                    )}
                />

                <Controller
                    name="description"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Descrição:"
                            value={value}
                            onChange={onChange}
                            placeholder="Descrição..."
                        />
                    )}
                />

                <Controller
                    name="repositoryGit"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Repositório Git:"
                            value={value}
                            onChange={onChange}
                            placeholder="Repositório Git..."
                        />
                    )}
                />

                <Controller
                    name="urlDoc"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="URL Documento:"
                            value={value}
                            onChange={onChange}
                            placeholder="URL Documento..."
                        />
                    )}
                />

                <Controller
                    name="projects"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Projetos:"
                            value={value}
                            onChange={onChange}
                            placeholder="Projetos..."
                        />
                    )}
                />

                <Controller
                    name="clients"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Clientes:"
                            value={value}
                            onChange={onChange}
                            placeholder="Clientes..."
                        />
                    )}
                />

                <div className={styles.actionButtons}>
                    <SecondaryButton type="submit" disabled={isPending}>
                        Editar
                    </SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};
