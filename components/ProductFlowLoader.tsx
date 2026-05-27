"use client";

import dynamic from "next/dynamic";

const ProductFlow = dynamic(() => import("./ProductFlow"), {
  ssr: false,
  loading: () => (
    <div className="h-[560px] flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
      Loading diagram...
    </div>
  ),
});

export default function ProductFlowLoader() {
  return <ProductFlow />;
}
