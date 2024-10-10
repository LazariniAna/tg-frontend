import { MouseEventHandler } from "react";

export default function AddButton({
    title, functionClick, quantity
}: {
    title: string,
    quantity: number,
    functionClick?: MouseEventHandler<HTMLButtonElement>
}) {

    return (
        <button type="button" className={`flex justify-center items-center max-mxs:w-1/2  lg:w-1/5 w-1/3 my-5 py-0.5 px-3 bg-quartenary text-white rounded-md hover:bg-backgOver transition duration-300 ${!quantity ? 'pr-2 max-mxs:w-1/2' : 'pr-2 max-mxs:w-1/2'} `} onClick={functionClick}>
            <p className={`flex justify-center items-center text-3xl text-center pb-1 ${!quantity ? 'pr-2' : 'pr-0'}`}>+</p>
                <div className={`flex justify-center items-center text-center ${!quantity ? '' : 'max-sm:hidden'}`}>
                    {title}
                </div>
        </button>
    );
}