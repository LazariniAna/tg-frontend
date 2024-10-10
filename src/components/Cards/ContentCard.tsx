import { handleSlug } from "@/utils/functions";
import { ContentItems } from "@/utils/types";
import Link from "next/link";
export default function ContentCard({ item }: { item: ContentItems }) {

  return (
    <Link href={`/conteudos/publicados/${item.id}/${handleSlug(item.title)}`} className='flex flex-col min-w-[265px] max-w-[265px] w-[265px] min-h-[400px] max-h-[400px] h-[400px]  justify-center items-center cursor-pointer hover:shadow-lg m-4 hover:scale-105 ease-in duration-150' >
      <div className='w-full flex flex-col justify-between items-center rounded-lg min-h-[400px] max-h-[400px] h-[400px] bg-white' style={{ border: '2px solid #A6A9AD' }}>
        <div className=" py-2 px-3 text-sm flex flex-col justify-between h-full">
          <div className="font-bold p-1 flex items-center w-full">
            {item.title}
          </div>
          <div className="text-quinary overflow-hidden text-ellipsis line-clamp-2">
            {item.subtitle}
          </div>
        </div>
      </div>
    </Link>

  );
}  