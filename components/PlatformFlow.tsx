"use client";

import {
  ReactFlow,
  Handle,
  Position,
  MarkerType,
  type Node,
  type Edge,
  type NodeTypes,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const ACCENT = "#F2B800";

// ─── Video Node ───────────────────────────────────────────────────────────────

function VideoNode({ data }: NodeProps) {
  const d = data as {
    name: string;
    tag: string;
    isCore: boolean;
    videoId: string;
    description: string;
  };

  return (
    <div
      style={{
        width: d.isCore ? 460 : 300,
        background: "#0d0d0d",
        border: d.isCore
          ? `1px solid ${ACCENT}55`
          : "1px solid rgba(255,255,255,0.09)",
        boxShadow: d.isCore ? `0 0 80px ${ACCENT}0a` : "none",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {d.isCore ? (
        <>
          <Handle
            type="source"
            position={Position.Right}
            style={{ background: ACCENT, border: "none", width: 8, height: 8 }}
          />
        </>
      ) : (
        <Handle
          type="target"
          position={Position.Left}
          style={{ background: "rgba(255,255,255,0.4)", border: "none", width: 8, height: 8 }}
        />
      )}

      {/* Video */}
      <div style={{ position: "relative", paddingBottom: "56.25%", background: "#080808" }}>
        <iframe
          src={`https://www.youtube.com/embed/${d.videoId}?rel=0&modestbranding=1&color=white`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          padding: d.isCore ? "16px 20px" : "12px 16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontSize: "8px",
            letterSpacing: "0.16em",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 5,
            color: d.isCore ? ACCENT : "rgba(255,255,255,0.28)",
          }}
        >
          {d.tag}
        </div>
        <div
          style={{
            fontSize: d.isCore ? 18 : 14,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.01em",
            marginBottom: d.isCore ? 8 : 0,
          }}
        >
          {d.name}
        </div>
        {d.isCore && (
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            {d.description}
          </div>
        )}
      </div>
    </div>
  );
}

const nodeTypes: NodeTypes = { videoNode: VideoNode };

// ─── Data ─────────────────────────────────────────────────────────────────────

const nodes: Node[] = [
  {
    id: "core",
    type: "videoNode",
    position: { x: 0, y: 190 },
    data: {
      name: "SimTwinCore",
      tag: "Foundation — included",
      isCore: true,
      videoId: "2qBExBNPMR0",
      description:
        "The integration backbone of your factory — OPC-UA, MQTT, real-time pipeline, AI anomaly detection, and live dashboards.",
    },
  },
  {
    id: "ai",
    type: "videoNode",
    position: { x: 560, y: 0 },
    data: {
      name: "AI / ML Integration",
      tag: "Add-on module",
      isCore: false,
      videoId: "7Pq-S557XQU",
      description: "",
    },
  },
  {
    id: "sim",
    type: "videoNode",
    position: { x: 560, y: 255 },
    data: {
      name: "Machine Simulators",
      tag: "Add-on module",
      isCore: false,
      videoId: "JDEpELVLnqo",
      description: "",
    },
  },
  {
    id: "synth",
    type: "videoNode",
    position: { x: 560, y: 510 },
    data: {
      name: "Synthetic Data",
      tag: "Add-on module",
      isCore: false,
      videoId: "aircAruvnKk",
      description: "",
    },
  },
];

const edges: Edge[] = [
  {
    id: "c-ai",
    source: "core",
    target: "ai",
    animated: true,
    style: { stroke: ACCENT, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: ACCENT },
  },
  {
    id: "c-sim",
    source: "core",
    target: "sim",
    animated: true,
    style: { stroke: ACCENT, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: ACCENT },
  },
  {
    id: "c-synth",
    source: "core",
    target: "synth",
    animated: true,
    style: { stroke: ACCENT, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: ACCENT },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PlatformFlow() {
  return (
    <div style={{ height: 740 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        preventScrolling={false}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#090909",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.02,
            pointerEvents: "none",
          }}
        />
      </ReactFlow>
    </div>
  );
}
