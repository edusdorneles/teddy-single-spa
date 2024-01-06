import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services";
import { Loading, PrimaryButton, RedButton, SecondaryButton } from "../../components";
import { formatDate } from "../../utils";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./styles.module.css";

export const ListCompanies = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["get-companies"],
        queryFn: getCompanies
    });

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return !isLoading ? (
        <div className={styles.container}>
            <h1 className={styles.title}>Listar empresas</h1>

            <table className={styles.companyTable}>
                <tr>
                    <th>Nome</th>
                    <th>Qtd. colaboradores</th>
                    <th>Ativa</th>
                    <th>Último envio</th>
                    <th>Criada em</th>
                    <th>Ações</th>
                </tr>

                {currentData.map((company) => (
                    <tr>
                        <td>{company.companyName}</td>
                        <td>{company.collaboratorsCount}</td>
                        <td>{company.isActive ? "Sim" : "Não"}</td>
                        <td>{formatDate(company.lastSubmit)}</td>
                        <td>{formatDate(company.createdAt)}</td>

                        <td>
                            <div className={styles.companyTableActionButtons}>
                                <SecondaryButton>Editar</SecondaryButton>
                                <RedButton>Deletar</RedButton>
                            </div>
                        </td>
                    </tr>
                ))}
            </table>

            <div className={styles.pagination}>
                <p>
                    Página {currentPage} de {totalPages}
                </p>

                <PrimaryButton
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Anterior
                </PrimaryButton>

                <SecondaryButton
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Próximo
                </SecondaryButton>
            </div>
        </div>
    ) : (
        <Loading />
    );
};
