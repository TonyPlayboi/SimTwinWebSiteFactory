"use client";

import {
  ReactFlow,
  Background,
  BackgroundVariant,
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
const WHITE_EDGE = "rgba(255,255,255,0.4)";

function InputNode({ data }: NodeProps) {
  return (
    <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)", width: 168, padding: "14px 16px" }}>
      <Handle type="source" position={Position.Right} style={{ background: "rgba(255,255,255,0.5)", border: "none", width: 6, height: 6 }} />
      <div style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(255,255,255,0.22)", fontWeight: 700, textTransform: "uppercase", marginBottom: 5 }}>
        {data.sublabel as string}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em" }}>
        {data.label as string}
      </div>
    </div>
  );
}

function HubNode({ data }: NodeProps) {
  const lines = data.lines as string[];
  return (
    <div style={{ background: "#0d0d0d", border: `1px solid ${AMBER_DIM}`, width: 210, padding: "20px 22px", boxShadow: `0 0 60px rgba(240,180,41,0.07)` }}>
      <Handle type="target" position={Position.Left}  style={{ background: AMBER, border: "none", width: 6, height: 6 }} />
      <Handle type="source" position={Position.Right} style={{ background: AMBER, border: "none", width: 6, height: 6 }} />
      <div style={{ fontSize: 8, letterSpacing: "0.14em", color: AMBER_DIM, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
        Core Platform
      </div>
      <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 14 }}>
        SimTwin Core
      </div>
      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, lineHeight: 2 }}>
        {lines.map((l) => <div key={l}>· {l}</div>)}
      </div>
    </div>
  );
}

function OutputNode({ data }: NodeProps) {
  const img = data.img as string | undefined;
  return (
    <div style={{ background: "#0d0d0d", border: `1px solid ${AMBER_DIM}`, width: 200, overflow: "hidden" }}>
      <Handle type="target" position={Position.Left} style={{ background: AMBER, border: "none", width: 6, height: 6 }} />
      {img && (
        <div style={{ height: 110, overflow: "hidden" }}>
          <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      )}
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 8, letterSpacing: "0.14em", color: AMBER_DIM, fontWeight: 700, textTransform: "uppercase", marginBottom: 5 }}>
          Output
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em" }}>
          {data.label as string}
        </div>
      </div>
    </div>
  );
}

const nodeTypes: NodeTypes = {
  inputNode:  InputNode,
  hubNode:    HubNode,
  outputNode: OutputNode,
};

const nodes: Node[] = [
  { id: "plc",     type: "inputNode",  position: { x: 0,   y: 60  }, data: { label: "PLCs / SCADA",       sublabel: "Control System"     } },
  { id: "hmi",     type: "inputNode",  position: { x: 0,   y: 200 }, data: { label: "Tablets / HMI",      sublabel: "Operator Interface" } },
  { id: "sensors", type: "inputNode",  position: { x: 0,   y: 340 }, data: { label: "Industrial Sensors",  sublabel: "Field Devices"      } },
  {
    id: "core",
    type: "hubNode",
    position: { x: 265, y: 140 },
    data: { lines: ["OPC-UA & MQTT", "Real-time pipeline", "AI analysis", "3D visualization"] },
  },
  { id: "dash",    type: "outputNode", position: { x: 570, y: 0   }, data: { label: "Live Dashboards", img: "/images/Overall.png"  } },
  { id: "reports", type: "outputNode", position: { x: 570, y: 190 }, data: { label: "AI Reports",      img: "/images/Raport.webp"  } },
  { id: "alerts",  type: "outputNode", position: { x: 570, y: 380 }, data: { label: "Anomaly Alerts",  img: "/images/Awaria.webp"  } },
];

const edgeBase = { animated: true };

const edges: Edge[] = [
  { ...edgeBase, id: "plc-core",      source: "plc",     target: "core",    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE } },
  { ...edgeBase, id: "hmi-core",      source: "hmi",     target: "core",    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE } },
  { ...edgeBase, id: "sensors-core",  source: "sensors", target: "core",    style: { stroke: WHITE_EDGE, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: WHITE_EDGE } },
  { ...edgeBase, id: "core-dash",     source: "core",    target: "dash",    style: { stroke: AMBER, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: AMBER } },
  { ...edgeBase, id: "core-reports",  source: "core",    target: "reports", style: { stroke: AMBER, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: AMBER } },
  { ...edgeBase, id: "core-alerts",   source: "core",    target: "alerts",  style: { stroke: AMBER, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: AMBER } },
];

export default function CoreFlow() {
  return (
    <div style={{ height: "580px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.12 }}
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
