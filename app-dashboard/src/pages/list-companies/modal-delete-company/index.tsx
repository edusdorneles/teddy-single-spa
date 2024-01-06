import { useMutation } from "@tanstack/react-query";
import { Modal, RedButton } from "../../../components";
import { deleteCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalDeleteCompany = ({ id, name, refetch }: T.Props) => {
    const { mutate, isPending } = useMutation({
        mutationKey: ["delete-company"],
        mutationFn: () => deleteCompany({ id }),
        onSuccess: () => {
            refetch();
            toast("Empresa deletada com sucesso.", { type: "success" });
            closeModalById(`delete-company=${id}`);
        },
        onError: () => {
            toast("Erro ao deletar empresa.", { type: "error" });
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
