'use client';
import * as React from 'react';
import { Button } from "@/components/Button";
import Content from "@/components/Content";
import LoadingOverlay from "@/components/Loading";
import ConfirmDeleteModal from "@/components/Modal/confirmDeleteModal";
import api from "@/server/api";
import { getSchedulings, getSchedulingsUsers } from "@/server/services";
import { showErrorToast } from "@/utils/messages.helper";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { teacherSaved } from '@/utils/const';
import RedirectLogin from '@/components/Modal/redirectLogin';
import CalendarComponent from '@/components/Calendar/Calendar';
import { generateColorFromCPF } from '@/utils/functions';
import Calendar from '../../assets/calendar.png'
import Square from '../../assets/square.png'
import Image from 'next/image';

export default function Agendamentos() {
    const [schedulings, setSchedulings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
    const [allowDelete, setAllowDelete] = useState(false);
    const [idSelected, setIdSelected] = useState<number | null>(null);
    const [isOpenRedirect, setIsOpenRedirect] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(true);

    function formatDateTime(dateStr: string) {
        const date = new Date(dateStr);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é zero-indexado
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
            width: '10%',
        },
        {
            name: 'Usuário',
            selector: (row: any) => row.usuario.nome,
            sortable: true,
            width: '25%',
        },
        {
            name: 'Contato',
            selector: (row: any) => row.usuario.telefone,
            sortable: true,
            width: '15%',
        },
        {
            name: 'Data/Hora',
            selector: (row: any) => formatDateTime(row.data_hora),
            sortable: true,
            width: '15%',

            sortFunction: ((a: any, b: any) => {
                return new Date(a.data_hora) < new Date(b.data_hora) ? -1 : 1
            })
        },
        {
            name: 'Obs.',
            selector: (row: any) => row.obs,
            sortable: true,
            width: '25%',
            cell: (row: any) => (
                <div className="truncate-text" title={row.obs}>
                    {row.obs}
                </div>
            ),
            style: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        },
        {
            name: 'Ações',
            cell: (row: any) => (
                <div className="flex gap-3 justify-start">
                    <div className="bg-darkBlue rounded p-1 cursor-pointer" onClick={() => window.location.assign(`/agendamentos/agendar/${row.id}`)}><Edit fontSize="small" />
                    </div>
                    <div className="bg-warning rounded p-1 cursor-pointer" onClick={() => {
                        setAllowDelete(false)
                        handleModalConfirmDelete(row.id);
                    }}><DeleteOutline fontSize="small" /></div>
                </div>
            ),
            width: '10%',
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
        style: {
            textAlign: 'left', // Alinhamento à esquerda para células
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

    const handleModalConfirmDelete = (id: number) => { setIdSelected(id); setIsOpenConfirmDelete(!isOpenConfirmDelete) };

    useEffect(() => {
        const fetchData = async () => {
            let data;
            if (teacherSaved.admin) data = await getSchedulings();
            else data = await getSchedulingsUsers(teacherSaved.id);
            setSchedulings(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const normalizedValues = React.useMemo(() => {
        const result: any[] = [];

        schedulings?.forEach((item: any) => {
            result.push({
                ...item,
                valueRedirect: item.id,
                start: item.data_hora,
                title: `Visita de ${item.usuario.nome}`,
                HostName: item.usuario.nome,
                color: generateColorFromCPF(item.usuario.cpf),
            });
        });

        return result;
    }, [schedulings]);


    useEffect(() => {
        if (allowDelete && idSelected) handleDelete(idSelected);
    }, [isOpenConfirmDelete]);

    useEffect(() => {
        if (!Object.entries(teacherSaved).length) setIsOpenRedirect(true);
    }, []);

    if (loading) {
        return <LoadingOverlay />;
    }

    return (
        <Content>
            <div className="flex flex-col items-center w-10/12 ">
                <div className="w-full flex justify-between py-8">
                    <div className='flex gap-4 justify-center items-center'>
                        <h1 className="text-2xl">{teacherSaved.admin ? 'Lista de' : 'Meus'} Agendamentos</h1>
                        <div className='flex items-center justify-center cursor-pointer'>
                            <div className={`w-10  h-10 flex rounded-tl rounded-bl ${calendarOpen ? "bg-gray-800 border-gray-800 text-white hover:bg-gray-600 scale-100" : "bg-white text-gray-800 hover:bg-gray-200"} items-center justify-center text-center`} style={{ border: '1px solid black' }} onClick={() => setCalendarOpen(true)}>
                                <Image alt='buttom' src={Calendar} width={22} className={`${calendarOpen && 'invert'}`} />
                            </div>
                            <div className={`w-10  h-10 flex rounded-tr rounded-br ${!calendarOpen ? "bg-gray-800 scale-100 text-white hover:bg-gray-600" : "bg-white text-gray-800 hover:bg-gray-200"} items-center justify-center `} style={{ border: '1px solid black' }} onClick={() => setCalendarOpen(false)}>
                                <Image alt='buttom' src={Square} width={20} className={`${!calendarOpen && 'invert'}`} />
                            </div>
                        </div>
                    </div>
                    <Button color="black" fill="filled" onClick={() => window.location.assign('/agendamentos/agendar/cadastro')}>Agendar</Button>
                </div>
                {
                    calendarOpen ?
                        <CalendarComponent data={normalizedValues} />
                        :
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
                }
            </div>
            <ConfirmDeleteModal isOpenModal={isOpenConfirmDelete} setIsOpenModal={setIsOpenConfirmDelete} allow={allowDelete} setAllow={setAllowDelete} />
            <RedirectLogin isOpenModal={isOpenRedirect} setIsOpenModal={setIsOpenRedirect} />
        </Content>
    );
}
