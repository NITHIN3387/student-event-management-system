import TabsNavbar from "@/components/Navbars/TabsNavbar/TabsNavbar";
import { FC, ReactNode } from "react";

interface navListType {
    label: string;
    link: string;
}

const navList: navListType[] = [
  {
    label: "Overall Attendence",
    link: "/student/attendence"
  },
  {
    label: "Pending Attendence",
    link: "/student/attendence/pending"
  }
]

const RootLayout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
  return (
    <div className=" overflow-y-hidden">
      <TabsNavbar navList={navList} />
      {children}
    </div>
  );
};

export default RootLayout;
