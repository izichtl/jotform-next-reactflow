"use client"
import { useEffect, useState } from 'react';
import ReactFlow, {
  Edge,
  ConnectionLineType,
} from 'reactflow';
import CustomNode from './CustomNode';
import NodeStatus from './NodeStatus';
import NodeArea from './NodeArea';
import 'reactflow/dist/style.css';
import styles from './Flow.module.css';
import { FlowContainer } from './style'
import { obterPrimeiroNome } from '../utils/data-format';
import { NODE_AREA, PRIMARY_GRAY } from '@/utils/colors';


function Flow( { data, mind, body, spirit, isMobile }: any) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const dimensionY = 100
  // const dimensionY = (700 - 18) / 2
  const dimensionX = (screenWidth - (128 + 150 + 10)) / 2


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
];

const nodeTypes = {
  custom: CustomNode,
  status: NodeStatus,
  area: NodeArea,
};

const defaultEdgeOptions = {
  animated: false,
  type: 'default',
};

  useEffect(() => {
  },[base])

  return (
    <FlowContainer >     
      <ReactFlow
        style={{
          // width: '100vh',
          backgroundColor: 'white',
          border: `1px solid ${NODE_AREA}`,
          // marginBottom: '0px',
          // margin: '0 auto'
        }}
        nodes={base}
        fitView={!isMobile}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: dimensionX, y: 0, zoom: 1 }}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        attributionPosition="bottom-left"
      />
    </FlowContainer>
  );
}
export default Flow;
