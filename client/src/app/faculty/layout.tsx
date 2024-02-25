import Dashboard from "@/assets/icons/Dashboard";
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
    icon: <Dashboard height={25} width={25} />,
    link: "/student/myParticipation",
  },
  {
    label: "Attendence",
    icon: <Dashboard height={25} width={25} />,
    link: "/student/attendence",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebsiteLayout navList={navList}>{children}</WebsiteLayout>;
}
