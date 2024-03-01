import Dashboard from "@/assets/icons/Dashboard";
import WebsiteLayout from "@/layouts/website/WebsiteLayout";
import AttendenceIcon from "@/assets/icons/AttendenceIcon";
import MarksIcon from "@/assets/icons/MarksIcon";
import MyParticipationIcon from "@/assets/icons/myParticipationIcon";

interface navListType {
  label: string;
  icon: JSX.Element;
  link: string;
}

const navList: navListType[] = [
  {
    label: "Dashboard",
    icon: <Dashboard height={25} width={25} />,
    link: "/faculty/dashboard",
  },
  {
    label: "Mentees",
    icon: <MyParticipationIcon height={25} width={25} />,
    link: "/faculty/Mentees",
  },
  {
    label: "Attendence",
    icon: <AttendenceIcon height={25} width={25} />,
    link: "/faculty/Attendence",
  },
  {
    label: "Marks",
    icon: <MarksIcon height={25} width={25} />,
    link: "/faculty/Marks",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebsiteLayout navList={navList}>{children}</WebsiteLayout>;
}
