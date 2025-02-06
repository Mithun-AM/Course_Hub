import "./Spinner.css"

export default function Spinner(){
    return(
        <div className="flex flex-col items-center justify-center space-y-2 h-[100vh]">
            <div className="Spinner"></div>
            <p className="text-bgDark text-lg font-semibold ">Loading...</p>
        </div>
    );
}