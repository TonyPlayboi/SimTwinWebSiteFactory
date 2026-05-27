"use client";

import dynamic from "next/dynamic";

const PlatformFlow = dynamic(() => import("./PlatformFlow"), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: 740 }}
      className="flex items-center justify-center text-white/20 text-xs tracking-widest uppercase bg-[#090909]"
    >
      Loading...
    </div>
  ),
});

export default function PlatformFlowLoader() {
  return <PlatformFlow />;
}
