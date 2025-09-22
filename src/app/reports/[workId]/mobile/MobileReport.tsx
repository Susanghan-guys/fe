"use client";

import GrayButton from "@/components/common/GrayButton";
import { useRouter } from "next/navigation";

const MobileReport = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/reports");
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      
      </div>
    </div>
  );
};

export default MobileReport;
