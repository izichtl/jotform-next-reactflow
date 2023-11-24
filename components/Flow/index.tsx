"use client"
import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
  ReactFlowProvider, 
  useReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import CustomNode from './CustomNode';
import 'reactflow/dist/style.css';
import styles from './Flow.module.css';
// import { Cabin_Sketch } from 'next/font/google';

// const teste = [
//   {
//     title: 'Saúde',
//     status: 'Neutro'
//   },
//   {
//     title: 'Saúde Mental',
//     status: 'Bom'
//   },
//   {
//     title: 'Atividade Física',
//     status: 'Regular'
//   },
//   {
//     title: 'Alimentação',
//     status: 'Ruim'
//   }
// ]

const createNodes = (arr: any) => {
  const returnPosition = (i: any) => {
    if(i === 0 ) return { x: 150  , y: 200 }
    if(i === 1 ) return { x: 400  , y: 100 }
    if(i === 2 ) return { x: 400  , y: 200 }
    if(i === 3 ) return { x: 400  , y: 300 }
  }
  const returnStyle = (i: any) => {
    if(i === 'Neutro' ) return styles.customNeutral
    if(i === 'Bom' ) return styles.customGood
    if(i === 'Regular' ) return styles.customRegular
    if(i === 'Ruim' ) return styles.customBad
  }
  return arr.map((item: any, i: number) => {
    return {
      id: (i+1).toString(),
      type: 'custom',
      data: { label: item.title },
      position: returnPosition(i),
      className: returnStyle(item.status),
    }
  })
}

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
];

const nodeTypes = {
  custom: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'default',
};

function Flow( { dataArray }: any) {
  // console.debug(dataArray, 'chegada flow')
  const aaa = createNodes(dataArray)
  // console.debug(aaa, 'edit flow')
  const [nodes, setNodes, ] = useState(aaa);
    
  useEffect(() => {

  },[nodes])

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    [],
  );


  return (
    <div className={styles.flow}>     
      <ReactFlow
        style={{
          backgroundColor: '#fafafa',
        }}
        nodes={nodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: -110, y: -60, zoom: 1.5 }}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        attributionPosition="bottom-left"
      />
    </div>
  );
}

export default Flow;
