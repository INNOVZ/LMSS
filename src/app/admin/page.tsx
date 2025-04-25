"use client";

import StatCard from "@/components/dashboard/StatCard";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.get("/admin/overview").then((res) => setData(res.data));
  }, []);

  if (!data) return <p className="p-4">Loading dashboard...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Courses" value={data.total_courses} />
        <StatCard title="Pending Requests" value={data.pending_requests} />
        <StatCard title="Approved Requests" value={data.approved_requests} />
        <StatCard title="Total Courses" value={data.total_courses} />
        <StatCard
          title="Upcomming Sessions"
          value={`${data.upcoming_sessions}`}
        />
        <StatCard title="Monthly Revenue" value={`$${data.pending_requests}`} />
      </div>
    </div>
  );
}
