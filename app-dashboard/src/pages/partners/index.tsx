import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../services";
import { GreenButton, Loading, PrimaryButton, RedButton, SecondaryButton } from "../../components";
import { formatDate, openModalById } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalDeletePartner } from "./modal-delete-partner";
import { ModalRegisterPartner } from "./modal-register-partner";
import styles from "./styles.module.css";

export const Partners = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["get-partners"],
        queryFn: getPartners
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
            <h1 className={styles.title}>Parceiros</h1>

            <table className={styles.partnerTable}>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Repositório Git</th>
                    <th>URL Documento</th>
                    <th>Projetos</th>
                    <th>Clientes</th>
                    <th>Criada em</th>
                    <th>Ações</th>
                </tr>

                {currentData.map((partner) => (
                    <>
                        <tr>
                            <td>{partner.name}</td>
                            <td>{partner.description}</td>
                            <td>{partner.repositoryGit}</td>
                            <td>{partner.urlDoc}</td>
                            <td>{partner.projects}</td>
                            <td>{partner.clients}</td>
                            <td>{formatDate(partner.createdAt)}</td>

                            <td>
                                <div className={styles.partnerTableActionButtons}>
                                    <SecondaryButton
                                        onClick={() => openModalById(`edit-partner-${partner.id}`)}
                                    >
                                        Editar
                                    </SecondaryButton>

                                    <RedButton
                                        onClick={() =>
                                            openModalById(`delete-partner-${partner.id}`)
                                        }
                                    >
                                        Deletar
                                    </RedButton>
                                </div>
                            </td>
                        </tr>

                        <ModalDeletePartner id={partner.id} name={partner.name} refetch={refetch} />
                    </>
                ))}
            </table>

            <div className={styles.tableBottom}>
                <div className={styles.addCompany}>
                    <GreenButton onClick={() => openModalById("register-partner")}>
                        Cadastrar parceiro
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

            <ModalRegisterPartner refetch={refetch} />
        </div>
    ) : (
        <Loading />
    );
};
