'use client'
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import { getContent } from "@/server/services";
import { ContentItems } from "@/utils/types";
import { useParams } from "next/navigation";

export default function Conteudo() {
  const [content, setContent] = useState<ContentItems | null>(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContent(Number(params.id));
      setContent(data);
    };
    fetchData();
  }, []);

  return (
    <Content>
      <div className="w-10/12 flex gap-2 pt-4">
        <div className="w-1/4">
          <b>Informações </b>
        </div>
        <div className="w-full">
          <b className="text-2xl">Conteúdo: {content?.title}</b>
          <div className="p-8">
            <div dangerouslySetInnerHTML={{ __html: content?.text || '' }} />
          </div>
        </div>
      </div>
    </Content>

  );
}  