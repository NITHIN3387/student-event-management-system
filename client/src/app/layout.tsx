import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/globals.css";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahyadri Student Event Manangement System",
  description:
    "a Database Management System (DBMS) for monitoring student involvement in a wide range of extracurricular activities, such as hackathons, sports, and cultural events. It gives the Department Head a thorough perspective to help determine eligibility for different possibilities by combining attendance and academic records. This data-driven method enhances the nuanced knowledge of students' overall progress within a succinct framework by enabling personalized recommendations based on individual strengths and areas for improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
