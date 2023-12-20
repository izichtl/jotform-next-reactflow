"use client"
import { useEffect, useState } from 'react';
import ReactFlow, {
  Edge,
  ConnectionLineType,
} from 'reactflow';
import CustomNode from './CustomNode';
import NodeStatus from './NodeStatus';
import NodeArea from './NodeArea';
import NodeSubStatus from './NodeSubStatus';
import 'reactflow/dist/style.css';
import styles from './Flow.module.css';
import { FlowContainer } from './style'
import { obterPrimeiroNome } from '../utils/data-format';
import { NODE_AREA } from '@/utils/colors';


function Flow( { data, mind, body, spirit, isMobile }: any) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const dimensionY = 100
  const dimensionX = (screenWidth - (128 + 150 + 10)) / 2


  const base: any = [
    {
      id: 'base',
      type: 'custom',
      data: { label: obterPrimeiroNome(data.fullName).toUpperCase(), icon: '📍', invert: false },
      position:  { x: dimensionX  , y: dimensionY-50 },
      className: styles.customNeutral,
    },
    {
      id: '2',
      type: 'area',
      data: { label: 'MENTE', icon: '🧠', invert: false  },
      position:  { x: (dimensionX - 600)  , y: (dimensionY + 250) },
    },
    {
      id: '3',
      type: 'area',
      data: { label: 'CORPO', icon: '🏃🏻‍♀️', invert: false  },
      position:  { x: (dimensionX)  , y: (dimensionY + 250) },
    },
    {
      id: '4',
      type: 'area',
      data: { label: 'ESPÍRITO', icon: '🧘🏽', invert: false  },
      position:  { x: (dimensionX + 600)  , y: (dimensionY + 250) },
    },
  ]

const getMindNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '2-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false, },
        position:  { x: (uniqueX + 175)  , y: (uniqueY + 250) },
      }
  }
  if (index === 1){
      return {
      id: '2-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX)  , y: (uniqueY + 250) },
    }
  }
  if (index === 2){
      return {
      id: '2-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX - 175)  , y: (uniqueY + 250) },
    }
  }
}
const getBodyNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '3-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false },
        position:  { x: (uniqueX + 175)  , y: (uniqueY + 250) },
      }
  }
  if (index === 1){
      return {
      id: '3-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX)  , y: (uniqueY + 250) },
    }
  }
  if (index === 2){
      return {
      id: '3-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX - 175)  , y: (uniqueY + 250) },
    }
  }
}
const getSpiritNodes = (index: number, arr: any[], uniqueX: number, uniqueY: number) => {
  if (index === 0){
      return {
        id: '4-1',
        type: 'status',
        data: { label: arr[0], status: arr[1], invert: false },
        position:  { x: (uniqueX  + 175)  , y: (uniqueY  + 250) },
      }
  }
  if (index === 1){
      return {
      id: '4-2',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX)  , y: (uniqueY  + 250) },
    }
  }
  if (index === 2){
      return {
      id: '4-3',
      type: 'status',
      data: { label: arr[0], status: arr[1], invert: false },
      position:  { x: (uniqueX  - 175)  , y: (uniqueY  + 250) },
    }
  }
}

mind.forEach((item: any, index: number) => {
  const node: any = getMindNodes(index, item, (base[1].position.x - 20), base[1].position.y)
  base.push(node)
  return
})
body.forEach((item: any, index: number) => {
  const node: any = getBodyNodes(index, item, (base[2].position.x - 20), base[2].position.y)
  base.push(node)
  return
})

spirit.forEach((item: any, index: number) => {
  const node: any = getSpiritNodes(index, item, (base[3].position.x - 20), base[3].position.y)
  base.push(node)
  return
})

const initialEdges: Edge[] = [
  { id: '001', source: 'base', target: '2' },
  { id: '002', source: 'base', target: '3' },
  { id: '003', source: 'base', target: '4' },
  { id: '004', source: '4', target: '1' },
  { id: '005', source: '2', target: '2-1' },
  { id: '006', source: '2', target: '2-2' },
  { id: '007', source: '2', target: '2-3' },
  { id: '008', source: '3', target: '3-1' },
  { id: '009', source: '3', target: '3-2' },
  { id: '010', source: '3', target: '3-3' },
  { id: '011', source: '4', target: '4-1' },
  { id: '012', source: '4', target: '4-2' },
  { id: '013', source: '4', target: '4-3' },
  { id: '014', source: '2-1', target: '2-1-0' },
  { id: '014', source: '2-2', target: '2-2-0' },
  { id: '014', source: '2-3', target: '2-3-0' },
  { id: '014', source: '3-1', target: '3-1-0' },
  { id: '014', source: '3-2', target: '3-2-0' },
  { id: '014', source: '3-3', target: '3-3-0' },
  { id: '014', source: '4-1', target: '4-1-0' },
  { id: '014', source: '4-2', target: '4-2-0' },
  { id: '014', source: '4-3', target: '4-3-0' },
];

const nodeTypes = {
  custom: CustomNode,
  status: NodeStatus,
  subStatus: NodeSubStatus,
  area: NodeArea,
};

const defaultEdgeOptions = {
  animated: false,
  type: 'default',
};

  useEffect(() => {
  },[base])

  const n: any = base.map((e: any) => e)
  base.forEach((element: any) => {
    const date = ['2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '4-1', '4-2', '4-3']
    const index = date.indexOf(element.id)
    if (index !== -1) {
      const nodeModel = {
        id: `${element.id}-0`,
        type: 'subStatus',
        data: { label: element.data.status, status: element.data.status, invert: false },
        position:  { x: element.position.x + 19  , y: element.position.y + 100 },
      }
      n.push(nodeModel)
    }
  })

  return (
    <FlowContainer >     
      <ReactFlow
        style={{
          backgroundColor: 'white',
          border: `1px solid ${NODE_AREA}`,
        }}
        nodes={n}
        fitView={!isMobile}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: dimensionX, y: 300, zoom: 0.5 }}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        attributionPosition="bottom-left"
      />
    </FlowContainer>
  );
}
export default Flow;
