import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { GrayInput, GraySelect, Modal, SecondaryButton } from "../../../components";
import { editCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalEditCompany = ({ id, name, collaborators, isActive, refetch }: T.Props) => {
    const {
        reset,
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<T.Schema>({
        defaultValues: { name: name, collaborators: collaborators, isActive: isActive }
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ["edit-company"],
        mutationFn: ({ name, collaborators, isActive }: T.MutationProps) =>
            editCompany({ id, name, collaborators, isActive }),
        onSuccess: () => {
            reset();
            refetch();
            toast("Empresa editada com sucesso.", { type: "success" });
            closeModalById(`edit-company=${id}`);
        },
        onError: () => {
            toast("Erro ao editar empresa.", { type: "error" });
        }
    });

    const onSubmit = (data: T.Schema) => {
        if (!data.name || !data.collaborators) {
            return toast("Preencha todos os campos.", { type: "warning" });
        }

        mutate({ name: data.name, collaborators: data.collaborators, isActive: data.isActive });
    };

    useEffect(() => {
        setValue("name", name);
        setValue("collaborators", collaborators);
        setValue("isActive", isActive);
    }, [name, collaborators, isActive]);

    return (
        <Modal id={`edit-company=${id}`} title="Editar empresa">
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
                    name="collaborators"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="number"
                            onChange={onChange}
                            value={Number(value)}
                            label="Qtd. colaboradores:"
                            placeholder="Qtd. colaboradores..."
                        />
                    )}
                />

                <Controller
                    name="isActive"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GraySelect
                            label="Está ativo?"
                            onChange={onChange}
                            value={value.toString()}
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </GraySelect>
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
