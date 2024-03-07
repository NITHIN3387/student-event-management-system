import AttendenceIcon from "@/assets/icons/AttendenceIcon";
import Dashboard from "@/assets/icons/Dashboard";
import GrantAttendenceIcon from "@/assets/icons/GrantAttendenceIcon";
import MarksIcon from "@/assets/icons/MarksIcon";
import MenteesIcon from "@/assets/icons/MenteesIcon";
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
    link: "/faculty/dashboard",
  },
  {
    label: "Mentees Participation",
    icon: <MyParticipationIcon height={25} width={25} />,
    link: "/faculty/menteesParticipation",
  },
  {
    label: "My Mentees",
    icon: <MenteesIcon height={25} width={25} />,
    link: "/faculty/myMentees",
  },
  {
    label: "Grant Attendence",
    icon: <GrantAttendenceIcon height={25} width={25} />,
    link: "/faculty/grantAttendence",
  },
  {
    label: "Attendence",
    icon: <AttendenceIcon height={25} width={25} />,
    link: "/faculty/attendence",
  },
  {
    label: "Marks",
    icon: <MarksIcon height={25} width={25} />,
    link: "/faculty/marks",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebsiteLayout navList={navList}>{children}</WebsiteLayout>;
}
