import React from "react";
import { usePathname, useRouter } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherDashboard = pathname?.startsWith("/console");
  const isstudentDashboard = pathname?.startsWith("/student");
    return <div className="container mx-auto">
      {/* {isTeacherDashboard ?():
        
      } */}
  </div>;
};

export default DashboardNav;
