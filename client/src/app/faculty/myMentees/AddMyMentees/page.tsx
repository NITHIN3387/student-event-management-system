import AddMenteesForm from "@/components/Forms/AddMenteesForm/AddMenteesForm";
import AddMyMenteesLayout from "@/layouts/AddMenteesLayout/AddMenteesLayout";
import React,{FC} from "react"


const page:FC =():JSX.Element=>{
    return(
        
            <AddMyMenteesLayout>
                <h1 className="text1-2xl font-semibold mb-7 border-l-[5px] pl-5 border-primary-color">Add Student Details

                </h1>

            </AddMyMenteesLayout>
        
    )
}
export default page;