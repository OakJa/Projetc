import { Suspense } from "react";
import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

export default function AdminPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminContent />
    </Suspense>
  );
}

async function AdminContent() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <p>เฉพาะ ADMIN เท่านั้น</p>
    </div>
  );
}