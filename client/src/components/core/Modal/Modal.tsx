

interface Props {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

const Modal = ({ children, open = false, setOpen = () => { } }: Props) => {
    const closeModal = () => {
        console.log("closeModal");
        
        setOpen(false);
    }
    return (
        <>
            {open && <div className="fixed inset-0 isolate">
                <div onClick={closeModal} className="cursor-pointer absolute inset-0 w-full h-full bg-gray-400 opacity-40 z-0"></div>
                <div className="absolute w-50 p-5  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-slate-100 shadow-md z-1">{children}</div>
            </div>}
        </>
    )
}

export default Modal