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
    <div>
      <TabsNavbar navList={navList} />
      <div className="mt-7">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
