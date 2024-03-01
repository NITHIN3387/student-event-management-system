import AttendenceIcon from "@/assets/icons/AttendenceIcon";
import Dashboard from "@/assets/icons/Dashboard";
import MarksIcon from "@/assets/icons/MarksIcon";
import MyParticipationIcon from "@/assets/icons/myParticipationIcon";
import WebsiteLayout from "@/layouts/website/WebsiteLayout";

interface navListType {
  label: string;
  icon: JSX.Element;
  link: string;
}

const navList: navListType[] = [
  {
    label: "Dashboard",
    icon: <Dashboard height={25} width={25} />,
    link: "/student/dashboard",
  },
  {
    label: "My Participation",
    icon: <MyParticipationIcon height={25} width={25} />,
    link: "/student/myParticipation",
  },
  {
    label: "Attendence",
    icon: <AttendenceIcon height={25} width={25} />,
    link: "/student/attendence",
  },
  {
    label: "Marks",
    icon: <MarksIcon height={25} width={25} />,
    link: "/student/marks",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebsiteLayout navList={navList}>{children}</WebsiteLayout>;
}
