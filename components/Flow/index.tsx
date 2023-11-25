"use client"
import { useEffect, useState } from 'react';
import ReactFlow, {
  // Node,
  // Controls,
  // Background,
  // useNodesState,
  // useEdgesState,
  // addEdge,
  // Connection,
  Edge,
  ConnectionLineType,
  // ReactFlowProvider, 
  // useReactFlow,
  // applyNodeChanges,
  // applyEdgeChanges,
} from 'reactflow';
import CustomNode from './CustomNode';
import NodeStatus from './NodeStatus';
import 'reactflow/dist/style.css';
import styles from './Flow.module.css';
import { FlowContainer } from './style'
import { obterPrimeiroNome } from '../utils/data-format';

const returnStyle = (i: any) => {
  if(i === 'Neutro' ) return styles.customNeutral
  if(i === 'equilibrada' || i === 'Equilíbrio' ) return styles.customGood
  if(i === 'alerta' || i === 'Alerta') return styles.customRegular
  if(i === 'atencao' || i === 'Atenção') return styles.customBad
}

function Flow( { data, mind, body, spirit }: any) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const dimensionY = (700 - 18) / 2
  const dimensionX = (screenWidth - (128+150)) / 2
  console.debug(data, 'USER DATA IN FLOW')


  const base = [
    {
      id: 'base',
      type: 'custom',
      data: { label: obterPrimeiroNome(data.fullName).toUpperCase(), icon: '📍', invert: false },
      position:  { x: dimensionX  , y: dimensionY },
      className: styles.customNeutral,
    },
    {
      id: '2',
      type: 'custom',
      data: { label: 'MENTE', icon: '🧠', invert: false  },
      position:  { x: (dimensionX+ 200)  , y: (dimensionY - 200) },
      className: styles.customAreaNode,
    },
    {
      id: '3',
      type: 'custom',
      data: { label: 'CORPO', icon: '🏃🏻‍♀️', invert: false  },
      position:  { x: (dimensionX+ 150)  , y: (dimensionY + 210) },
      className: styles.customAreaNode,
    },
    {
      id: '4',
      type: 'custom',
      data: { label: 'ESPÍRITO', icon: '🧘🏽', invert: false  },
      position:  { x: (dimensionX- 200)  , y: (dimensionY - 60) },
      className: styles.customAreaNode,
    },
    // {
    //   id: '2-1',
    //   type: 'status',
    //   data: { label: 'MENTE_A', status: 'Equilíbrio', invert: false },
    //   position:  { x: (q+ 400)  , y: (halfY-400) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '2-2',
    //   type: 'status',
    //   data: { label: 'MENTE_B', status: 'Alerta', invert: false },
    //   position:  { x: (q+ 500)  , y: (halfY-230) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '2-3',
    //   type: 'status',
    //   data: { label: 'MENTE_C', status: 'Atenção', invert: false },
    //   position:  { x: (q+ 600)  , y: (halfY-50) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '3-1',
    //   type: 'status',
    //   data: { label: 'CORPO_A', status: 'Equilíbrio', invert: false },
    //   position:  { x: (q+ 350)  , y: (halfY+60) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '3-2',
    //   type: 'status',
    //   data: { label: 'CORPO_B', status: 'Alerta', invert: false },
    //   position:  { x: (q+ 490)  , y: (halfY+240) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '3-3',
    //   type: 'status',
    //   data: { label: 'CORPO_C', status: 'Atenção', invert: false },
    //   position:  { x: (q+ 360)  , y: (halfY+ 400) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '4-1',
    //   type: 'status',
    //   data: { label: 'ESPÍRITO_A', status: 'Equilíbrio', invert: false },
    //   position:  { x: (q-400)  , y: (halfY-200) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '4-2',
    //   type: 'status',
    //   data: { label: 'ESPÍRITO_B', status: 'Alerta', invert: false },
    //   position:  { x: (q-480)  , y: (halfY-20) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '4-3',
    //   type: 'status',
    //   data: { label: 'ESPÍRITO_C', status: 'Atenção', invert: false },
    //   position:  { x: (q-360)  , y: (halfY+ 150) },
    //   className: styles.customNeutral,
    // },
    // {
    //   id: '0',
    //   type: 'custom',
    //   data: { label: 'NOME', sub: 'data' },
    //   position:  { x: 0  , y: 0 },
    //   className: styles.customNeutral,
    // },
  ]

const getMindNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '2-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false },
        position:  { x: (uniqueX + 400)  , y: (uniqueY - 400) },
        className: returnStyle(arr[1]),
      }
  }
  if (index === 1){
      return {
      id: '2-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX + 500)  , y: (uniqueY - 230) },
      className: returnStyle(arr[1]),
    }
  }
  if (index === 2){
      return {
      id: '2-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX + 600)  , y: (uniqueY - 50) },
      className: returnStyle(arr[1]),
    }
  }
}
const getBodyNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '3-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false },
        position:  { x: (uniqueX + 350)  , y: (uniqueY + 60) },
        className: returnStyle(arr[1]),
      }
  }
  if (index === 1){
      return {
      id: '3-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX + 490)  , y: (uniqueY + 240) },
      className: returnStyle(arr[1]),
    }
  }
  if (index === 2){
      return {
      id: '3-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX + 360)  , y: (uniqueY + 400) },
      className: returnStyle(arr[1]),
    }
  }
}
const getSpiritNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '4-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false },
        position:  { x: (uniqueX - 400)  , y: (uniqueY - 200) },
        className: returnStyle(arr[1]),
      }
  }
  if (index === 1){
      return {
      id: '4-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX - 480)  , y: (uniqueY - 20) },
      className: returnStyle(arr[1]),
    }
  }
  if (index === 2){
      return {
      id: '4-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX - 360)  , y: (uniqueY + 150) },
      className: returnStyle(arr[1]),
    }
  }
}

mind.forEach((item: any, index: number) => {
  console.debug(item, 'render')
  const node: any = getMindNodes(index, item, dimensionX, dimensionY)
  console.debug(node, 'node')
  base.push(node)
  return
})
body.forEach((item: any, index: number) => {
  console.debug(item, 'render')
  const node: any = getBodyNodes(index, item, dimensionX, dimensionY)
  console.debug(node, 'node')
  base.push(node)
  return
})

spirit.forEach((item: any, index: number) => {
  console.debug(item, 'render')
  const node: any = getSpiritNodes(index, item, dimensionX, dimensionY)
  console.debug(node, 'node')
  base.push(node)
  return
})

const initialEdges: Edge[] = [
  { id: '001', source: 'base', target: '2' },
  { id: '002', source: 'base', target: '3' },
  { id: '003', source: '4', target: 'base' },
  { id: '004', source: '4', target: '1' },
  { id: '005', source: '2', target: '2-1' },
  { id: '006', source: '2', target: '2-2' },
  { id: '007', source: '2', target: '2-3' },
  { id: '008', source: '3', target: '3-1' },
  { id: '009', source: '3', target: '3-2' },
  { id: '010', source: '3', target: '3-3' },
  { id: '011', source: '4-1', target: '4' },
  { id: '012', source: '4-2', target: '4' },
  { id: '013', source: '4-3', target: '4' },
];

const nodeTypes = {
  custom: CustomNode,
  status: NodeStatus,
};

const defaultEdgeOptions = {
  animated: false,
  type: 'default',
  // type: 'smoothstep',
};

  useEffect(() => {
  },[base])

  return (
    <FlowContainer >     
      <ReactFlow
        style={{
          backgroundColor: '#fff',
          marginBottom: '0px',
          margin: '0px'
        }}
        nodes={base}
        fitView={true}
        edges={initialEdges}
        // onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        // attributionPosition="bottom-left"
      />
    </FlowContainer>
  );
}

export default Flow;
