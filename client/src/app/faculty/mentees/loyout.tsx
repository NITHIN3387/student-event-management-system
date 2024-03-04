import TabsNavbar from '@/components/Navbars/TabsNavbar/TabsNavbar';
import {FC,ReactNode} from 'react'

interface NavListType{
    label:string;
    link:string;
}
 const navList:NavListType[]=[
    {
        label:"my Mentees",
        link:"/faculty/mentees"
    },
    {
        label:"Mentees Participation",
        link:"/faculty/mentees/participation"
    }
 ]
 const RootLayout:FC<Readonly<{children:ReactNode}>>=({children})=>{
    return(
        <div>
            <TabsNavbar navList={navList}/>
            {children}
        </div>
    )
 }
 export default RootLayout;