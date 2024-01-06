import { useMutation } from "@tanstack/react-query";
import { Modal, RedButton } from "../../../components";
import { deletePartner } from "../../../services";
import { closeModalById } from "../../../utils";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalDeletePartner = ({ id, name, refetch }: T.Props) => {
    const { mutate, isPending } = useMutation({
        mutationKey: ["delete-partner"],
        mutationFn: () => deletePartner({ id }),
        onSuccess: () => {
            refetch();
            toast("Parceiro deletado com sucesso.", { type: "success" });
            closeModalById(`delete-partner-${id}`);
        },
        onError: () => {
            toast("Erro ao deletar parceiro.", { type: "error" });
        }
    });

    return (
        <Modal id={`delete-partner-${id}`} title="Deletar parceiro">
            <div className={styles.container}>
                <p>
                    Você realmente deseja deletar o parceiro{" "}
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
