import TabsNavbar from "@/components/Navbars/TabsNavbar/TabsNavbar";
import{FC,ReactNode} from "react"

interface navListType{
    label:string;
    link:string;
}
const navList:navListType[]=[
    {
        label:"My mentees",
        link:"faculty/myMentees"
    },
    {
        label:"Mentees Participation",
        link:"myMentees/participation"
    }
]
const RootLayout:FC<Readonly<{children:ReactNode}>>=({children})=>{
    return(
        <div>
            {/* <TabsNavbar navList={navList}/> */}
            {children}
        </div>
    )
}
 export default RootLayout;
