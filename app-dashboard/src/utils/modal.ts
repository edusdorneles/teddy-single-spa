export const openModalById = (id: string) => {
    return (document.getElementById(id) as HTMLFormElement).showModal();
};

export const closeModalById = (id: string) => {
    return (document.getElementById(id) as HTMLFormElement).close();
};
