import { useMutation } from "@tanstack/react-query";
import { Modal, RedButton } from "../../../components";
import styles from "./styles.module.css";
import * as T from "./types";
import { deleteCompany } from "../../../services";
import { closeModalById } from "../../../utils";

export const ModalDeleteCompany = ({ id, name, refetch }: T.Props) => {
    const { mutate, isPending } = useMutation({
        mutationKey: ["delete-company"],
        mutationFn: () => deleteCompany({ id }),
        onSuccess: () => {
            refetch();
            alert("Empresa deletada com sucesso.");
            closeModalById(`delete-company=${id}`);
        },
        onError: () => {
            alert("Erro ao deletar empresa.");
        }
    });

    return (
        <Modal id={`delete-company=${id}`} title="Deletar empresa">
            <div className={styles.container}>
                <p>
                    Você realmente deseja deletar a empresa{" "}
                    <span className={styles.companyName}>{name}</span>?
                </p>

                <div className={styles.actionButtons}>
                    <RedButton onClick={() => mutate()} disabled={isPending}>
                        Deletar
                    </RedButton>
                </div>
            </div>
        </Modal>
    );
};
