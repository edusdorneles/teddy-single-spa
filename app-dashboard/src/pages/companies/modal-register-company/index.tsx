import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { Modal, GrayInput, GraySelect, SecondaryButton } from "../../../components";
import { registerCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalRegisterCompany = ({ refetch }) => {
    const { reset, control, handleSubmit } = useForm<T.Schema>({
        defaultValues: { isActive: "true" }
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ["register-company"],
        mutationFn: ({ name, collaborators, isActive }: T.MutationProps) =>
            registerCompany({ name, collaborators, isActive }),
        onSuccess: () => {
            reset();
            refetch();
            toast("Empresa cadastrada com sucesso.", { type: "success" });
            closeModalById("register-company");
        },
        onError: () => {
            toast("Erro ao cadastrar empresa.", { type: "error" });
        }
    });

    const onSubmit = (data: T.Schema) => {
        if (!data.name || !data.collaborators) {
            return toast("Preencha todos os campos.", { type: "warning" });
        }

        mutate({ name: data.name, collaborators: data.collaborators, isActive: data.isActive });
    };

    return (
        <Modal id="register-company" title="Cadastrar empresa">
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
                        Cadastrar
                    </SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};
