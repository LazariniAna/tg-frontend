'use client';
import ContentCard from "@/components/Cards/ContentCard";
import Content from "@/components/Content";
import LoadingOverlay from "@/components/Loading";
import ConfirmDeleteModal from "@/components/Modal/confirmDeleteModal";
import { getContents } from "@/server/services";
import { useEffect, useState } from "react";

export default function Conteudos() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
    const [allowDelete, setAllowDelete] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getContents();
            setContents(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingOverlay />;
    }

    return (
        <Content>
            <div className="flex flex-col items-center w-10/12 ">
                <div className="w-full flex flex-col justify-between py-8">
                    <h1 className="text-2xl font-bold">Lista de Conteudos</h1>
                    <br></br>
                    <p className="text-xl">Acesse nossos conteúdos publicados por membros de nossa equipe!</p>
                </div>
                <div className="flex flex-wrap">
                    {contents && contents.map((content: any, index: number) => (
                        <div key={index}>
                            <ContentCard item={content} />
                            {/* <ContentCardImage item={content} /> */}
                        </div>
                    ))
                    }
                </div>
            </div>
            <ConfirmDeleteModal isOpenModal={isOpenConfirmDelete} setIsOpenModal={setIsOpenConfirmDelete} allow={allowDelete} setAllow={setAllowDelete} />
        </Content>
    );
}
