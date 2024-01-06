import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { Modal, GrayInput, SecondaryButton } from "../../../components";
import { registerPartner } from "../../../services";
import { closeModalById } from "../../../utils";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalRegisterPartner = ({ refetch }) => {
    const { reset, control, handleSubmit } = useForm<T.Schema>();

    const { mutate, isPending } = useMutation({
        mutationKey: ["register-company"],
        mutationFn: ({
            name,
            description,
            repositoryGit,
            urlDoc,
            projects,
            clients
        }: T.MutationProps) =>
            registerPartner({ name, description, repositoryGit, urlDoc, projects, clients }),
        onSuccess: () => {
            reset();
            refetch();
            toast("Parceiro cadastrado com sucesso.", { type: "success" });
            closeModalById("register-partner");
        },
        onError: () => {
            toast("Erro ao cadastrar parceiro.", { type: "error" });
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

    return (
        <Modal id="register-partner" title="Cadastrar parceiro">
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
                            value={value}
                            label="Descrição:"
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
                            value={value}
                            label="Repositório Git:"
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
                            value={value}
                            label="URL Documento:"
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
                            onChange={onChange}
                            value={value}
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
                            onChange={onChange}
                            value={value}
                            placeholder="Clientes..."
                        />
                    )}
                />

                <div className={styles.actionButtons}>
                    <SecondaryButton type="submit" disabled={isPending}>
                        Cadastrar
                    </SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};
