import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { GrayInput, GraySelect, Modal, SecondaryButton } from "../../../components";
import { editCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import { Controller, useForm } from "react-hook-form";
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
        mutationKey: ["delete-company"],
        mutationFn: ({ name, collaborators, isActive }: T.MutationProps) =>
            editCompany({ id, name, collaborators, isActive }),
        onSuccess: () => {
            reset();
            refetch();
            alert("Empresa editada com sucesso.");
            closeModalById(`edit-company=${id}`);
        },
        onError: () => {
            alert("Erro ao editar empresa.");
        }
    });

    const onSubmit = (data: T.Schema) => {
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

                {errors.name && <p>name: {errors.name.message}</p>}
                {errors.collaborators && <p>col: {errors.collaborators.message}</p>}
                {errors.isActive && <p>active: {errors.isActive.message}</p>}
            </form>
        </Modal>
    );
};
