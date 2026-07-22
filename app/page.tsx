"use client";
import {useRouter} from "next/navigation";

import HeroBanner from "@/src/components/HeroBanner";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = (): void => {
    router.push('/tasks');
  }
    return (
      <>
        <HeroBanner onGetStarted={handleGetStarted} />
      </>
   );
}
