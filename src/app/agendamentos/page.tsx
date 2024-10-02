'use client';
import * as React from 'react';
import { Button } from "@/components/Button";
import Content from "@/components/Content";
import LoadingOverlay from "@/components/Loading";
import ConfirmDeleteModal from "@/components/Modal/confirmDeleteModal";
import api from "@/server/api";
import { getSchedulings } from "@/server/services";
import { showErrorToast } from "@/utils/messages.helper";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';

export default function Agendamentos() {
    const [schedulings, setSchedulings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
    const [allowDelete, setAllowDelete] = useState(false);
    const [idSelected, setIdSelected] = useState<number | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getSchedulings();
            console.log(data);
            setSchedulings(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: 'Usuário',
            selector: (row: any) => row.usuario.nome,
            sortable: true,
        },
        {
            name: 'Contato',
            selector: (row: any) => row.usuario.telefone,
            sortable: true,
        },
        {
            name: 'Data/Hora',
            selector: (row: any) => dayjs(row.data_hora).format('DD/MM/YYYY HH:MM') + "h",
            sortable: true,
        },
        {
            name: 'Obs.',
            selector: (row: any) => row.obs,
            sortable: true,
            cell: (row: any) => (
                <div className="truncate-text" title={row.obs}>
                    {row.obs}
                </div>
            ),
            style: {
                maxWidth: '200px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        },
        {
            name: 'Ações',
            cell: (row: any) => (
                <div className="flex gap-3">
                    <div className="bg-darkBlue rounded p-1 cursor-pointer" onClick={() => window.location.assign(`/agendamentos/agendar/${row.id}`)}><Edit fontSize="small" />
                    </div>
                    <div className="bg-warning rounded p-1 cursor-pointer" onClick={() =>{
                        setAllowDelete(false)
                        handleModalConfirmDelete(row.id);
                        }}><DeleteOutline fontSize="small" /></div>
                </div>
            ),
            center: true,
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            },
            sortable: false,
        },
    ];

    const customStyles = {
        all: {
            borderRadius: '20px',
        },
        table: {
            style: {
                border: '2px solid rgba(9, 45, 118, 0.5)',
                borderRadius: '8px',
            },
        },
        rows: {
            style: {
                border: '2px solid rgba(9, 45, 118, 0.5)',
                borderRadius: '8px',
            },
        },
        headRow: {
            style: {
                borderRadius: '8px',
                border: '2px solid rgba(9, 45, 118, 0.5)',
            },
        },
        headCells: {
            style: {
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '15px',
            },
        },
        noData: {
            style: {
                borderRadius: '20px',
                padding: '24px',
            },
        },
        cells: {
            style: {
            },
        },
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        try {
            await api.delete(`/scheduling/${id}`);
            setLoading(false);
            window.location.assign(`/agendamentos`);
        } catch (error) {
            setLoading(false);
            showErrorToast("Erro ao deletar usuário!");
        }
    };

    const handleModalConfirmDelete = (id:number) => {setIdSelected(id);setIsOpenConfirmDelete(!isOpenConfirmDelete)};

    useEffect(() => {
        if (allowDelete && idSelected) handleDelete(idSelected);
    }, [isOpenConfirmDelete]);

    if (loading) {
        return <LoadingOverlay />;
    }

    return (
        <Content>
            <div className="flex flex-col items-center w-10/12 ">
                <div className="w-full flex justify-between py-8">
                    <h1 className="text-2xl">Lista de 
                        Agendamentos
                    </h1>
                    <Button color="black" fill="filled" onClick={() => window.location.assign('/agendamentos/agendar/cadastro')}>Agendar</Button>
                </div>
                <DataTable
                    columns={columns}
                    data={schedulings}
                    pagination
                    highlightOnHover
                    striped
                    noDataComponent={"Não há cadastros!"}
                    paginationComponentOptions={paginationComponentOptions}
                    customStyles={customStyles}
                />
            </div>
            <ConfirmDeleteModal isOpenModal={isOpenConfirmDelete} setIsOpenModal={setIsOpenConfirmDelete} allow={allowDelete} setAllow={setAllowDelete} />
        </Content>
    );
}
