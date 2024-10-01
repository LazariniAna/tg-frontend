import { MouseEventHandler } from "react";

export default function BackButton({
    title, functionClick
}: {
    title: string,
    quantity?: number,
    functionClick?: MouseEventHandler<HTMLButtonElement>
}) {

    return (
        <button type="button" className={`min-w-40 w-44 max-mxs:w-40 my-5 py-2 px-4 border-2 border-dark hover:bg-quinary transition duration-300  text-black rounded-md `} onClick={functionClick}>
            <div className="flex justify-center items-center text-center">
                <b>{title}</b>
            </div>
        </button>
    );
}