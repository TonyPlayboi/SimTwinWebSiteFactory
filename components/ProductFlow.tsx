"use client";

import {
  ReactFlow,
  BackgroundVariant,
  Background,
  MarkerType,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeTypes,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const AMBER = "#F2B800";
const AMBER_DIM = "rgba(242,184,0,0.55)";

// Swap the inner div for <img src="…" className="w-full h-full object-cover" /> when assets are ready
function ImgSlot({ height, amber }: { height: number; amber?: boolean }) {
  return (
    <div
      style={{
        height,
        background: "#080808",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: amber ? AMBER : "rgba(255,255,255,0.18)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}

function SourceNode({ data }: NodeProps) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "3px",
        width: "178px",
        overflow: "hidden",
      }}
    >
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "rgba(255,255,255,0.5)", border: "none", width: 7, height: 7 }}
      />
      <ImgSlot height={148} />
      <div style={{ padding: "13px 15px" }}>
        <div
          style={{
            fontSize: "8.5px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.25)",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          Data Source
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "-0.01em",
          }}
        >
          {data.label as string}
        </div>
      </div>
    </div>
  );
}

function CoreNode({ data }: NodeProps) {
  const lines = data.lines as string[];
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: `1px solid ${AMBER_DIM}`,
        borderRadius: "3px",
        width: "238px",
        overflow: "hidden",
        boxShadow: `0 0 60px rgba(240,180,41,0.06)`,
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: AMBER, border: "none", width: 7, height: 7 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: AMBER, border: "none", width: 7, height: 7 }}
      />
      <ImgSlot height={168} amber />
      <div style={{ padding: "17px 20px" }}>
        <div
          style={{
            fontSize: "8.5px",
            letterSpacing: "0.14em",
            color: AMBER_DIM,
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Core Platform
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "13px",
          }}
        >
          SimTwinCore
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "11px",
            lineHeight: "2",
          }}
        >
          {lines.map((line) => (
            <div key={line}>· {line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddonNode({ data }: NodeProps) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "3px",
        width: "178px",
        overflow: "hidden",
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: AMBER, border: "none", width: 7, height: 7 }}
      />
      <ImgSlot height={148} amber />
      <div style={{ padding: "13px 15px" }}>
        <div
          style={{
            fontSize: "8.5px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.25)",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          Module
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "-0.01em",
          }}
        >
          {data.label as string}
        </div>
      </div>
    </div>
  );
}

const nodeTypes: NodeTypes = {
  sourceNode: SourceNode,
  coreNode: CoreNode,
  addonNode: AddonNode,
};

const nodes: Node[] = [
  {
    id: "plc",
    type: "sourceNode",
    position: { x: 30, y: 0 },
    data: { label: "PLC / SCADA" },
  },
  {
    id: "sensors",
    type: "sourceNode",
    position: { x: 30, y: 220 },
    data: { label: "Industrial Sensors" },
  },
  {
    id: "cameras",
    type: "sourceNode",
    position: { x: 30, y: 440 },
    data: { label: "Vision Cameras" },
  },
  {
    id: "core",
    type: "coreNode",
    position: { x: 300, y: 95 },
    data: {
      lines: [
        "Factory Integration",
        "Real-time Pipeline",
        "AI Analysis Engine",
        "Dashboards & Reports",
      ],
    },
  },
  {
    id: "ai_ml",
    type: "addonNode",
    position: { x: 635, y: 0 },
    data: { label: "AI / ML Integration" },
  },
  {
    id: "machine_sim",
    type: "addonNode",
    position: { x: 635, y: 220 },
    data: { label: "Machine Simulators" },
  },
  {
    id: "synthetic",
    type: "addonNode",
    position: { x: 635, y: 440 },
    data: { label: "Synthetic Data" },
  },
];

const edgeBase = { animated: true };

const WHITE_EDGE = "rgba(255,255,255,0.45)";

const edges: Edge[] = [
  {
    ...edgeBase,
    id: "plc-core",
    source: "plc",
    target: "core",
    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE },
  },
  {
    ...edgeBase,
    id: "sensors-core",
    source: "sensors",
    target: "core",
    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE },
  },
  {
    ...edgeBase,
    id: "cameras-core",
    source: "cameras",
    target: "core",
    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE },
  },
  {
    ...edgeBase,
    id: "core-ai",
    source: "core",
    target: "ai_ml",
    style: { stroke: AMBER, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: AMBER },
  },
  {
    ...edgeBase,
    id: "core-sim",
    source: "core",
    target: "machine_sim",
    style: { stroke: AMBER, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: AMBER },
  },
  {
    ...edgeBase,
    id: "core-syn",
    source: "core",
    target: "synthetic",
    style: { stroke: AMBER, strokeWidth: 1.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: AMBER },
  },
];

export default function ProductFlow() {
  return (
    <div style={{ height: "560px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.14 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        preventScrolling={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={28}
          size={1}
          color="rgba(255,255,255,0.03)"
          style={{ background: "#090909" }}
        />
      </ReactFlow>
    </div>
  );
}
