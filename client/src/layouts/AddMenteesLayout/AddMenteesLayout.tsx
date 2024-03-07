import AddMenteesForm from "@/components/Forms/AddMenteesForm/AddMenteesForm";
import react, {FC,ReactNode} from "react"

interface propsType{
    children:ReactNode,
}

const AddMyMenteesLayout:FC<propsType>=({children}):JSX.Element=>{
    return(
        <div className="flex flex-col overflow-scroll">
            {children}
        <div className="bg-white h-full rounded-lg p-4 overflow-scroll">
            <AddMenteesForm/>
        </div>

        </div>
    )
}
export default AddMyMenteesLayout;