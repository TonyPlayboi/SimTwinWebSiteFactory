"use client";
import dynamic from "next/dynamic";

const CoreFlow = dynamic(() => import("./CoreFlow"), { ssr: false });

export default function CoreFlowLoader() {
  return <CoreFlow />;
}
