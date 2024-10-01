import { ContentItems } from "@/utils/types";
import Link from "next/link";
import { Button } from "../Button";
export default function ContentCard({ item }: { item: ContentItems }) {

  return (
    <div className='flex flex-col min-w-[265px] max-w-[265px] w-[265px] min-h-[400px] max-h-[400px] h-[400px]  justify-center items-center cursor-pointer hover:shadow-lg m-4 hover:scale-105 ease-in duration-150' >
      <div className='w-full flex flex-col justify-between items-center rounded-lg min-h-[400px] max-h-[400px] h-[400px] bg-white' style={{ border: '2px solid #A6A9AD' }}>
        <div className=" py-2 px-3 text-sm flex flex-col justify-between h-full">
          <div className="text-quinary p-1 flex items-center w-full">
            {item.theme}
          </div>
          <div className="font-bold p-1 flex items-center w-full">
            {item.title}
          </div>
          <div className="text-quinary overflow-hidden text-ellipsis line-clamp-2">
            {item.sub_title}
          </div>
          <Link href={`/`} className="w-full p-1 flex items-center justify-center">
            <Button color="black" size="large">VER MAIS</Button>
          </Link>
        </div>
      </div>
    </div>

  );
}  