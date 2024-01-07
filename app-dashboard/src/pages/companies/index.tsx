import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services";
import { GreenButton, Loading, PrimaryButton, RedButton, SecondaryButton } from "../../components";
import { formatDate, openModalById } from "../../utils";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalDeleteCompany } from "./modal-delete-company";
import { ModalEditCompany } from "./modal-edit-company";
import { ModalRegisterCompany } from "./modal-register-company";

export const Companies = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["get-companies"],
        queryFn: getCompanies
    });

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get("page")) || 1;
        setCurrentPage(page);
    }, [location.search]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        navigate(`?page=${newPage}`);
    };

    return !isLoading ? (
        <div className={styles.container}>
            <h1 className={styles.title}>Empresas externas</h1>

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
                    <>
                        <tr>
                            <td>{company.companyName}</td>
                            <td>{company.collaboratorsCount}</td>
                            <td>{company.isActive ? "Sim" : "Não"}</td>
                            <td>{formatDate(company.lastSubmit)}</td>
                            <td>{formatDate(company.createdAt)}</td>

                            <td>
                                <div className={styles.companyTableActionButtons}>
                                    <SecondaryButton
                                        onClick={() => openModalById(`edit-company=${company.id}`)}
                                    >
                                        Editar
                                    </SecondaryButton>

                                    <RedButton
                                        onClick={() =>
                                            openModalById(`delete-company=${company.id}`)
                                        }
                                    >
                                        Deletar
                                    </RedButton>
                                </div>
                            </td>
                        </tr>

                        <ModalDeleteCompany
                            id={company.id}
                            name={company.companyName}
                            refetch={refetch}
                        />

                        <ModalEditCompany
                            id={company.id}
                            refetch={refetch}
                            name={company.companyName}
                            isActive={company.isActive}
                            collaborators={company.collaboratorsCount}
                        />
                    </>
                ))}
            </table>

            <div className={styles.tableBottom}>
                <div className={styles.addCompany}>
                    <GreenButton onClick={() => openModalById("register-company")}>
                        Cadastrar empresa
                    </GreenButton>
                </div>

                <div className={styles.pagination}>
                    <p>
                        Página {currentPage} de {totalPages}
                    </p>

                    <div>
                        <PrimaryButton
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Anterior
                        </PrimaryButton>
                    </div>

                    <div>
                        <SecondaryButton
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Próximo
                        </SecondaryButton>
                    </div>
                </div>
            </div>

            <ModalRegisterCompany refetch={refetch} />
        </div>
    ) : (
        <Loading />
    );
};
