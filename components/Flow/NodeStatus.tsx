import { NODE_BAD, NODE_GOD, NODE_REGULAR } from '@/utils/colors';
import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { NodeStyleContainer, StatusControl, StatusNodeText, TextNode } from './style';

const sourceHandleStyleA: CSSProperties = {
  color: 'blue',
  backgroundColor: 'gray',
  border: '1px',
};

const statusColors = (i: any) => {
  if(i === 'equilibrada' || i === 'Equilíbrio' ) return NODE_GOD
  if(i === 'alerta' || i === 'Alerta') return NODE_REGULAR
  if(i === 'atencao' || i === 'Atenção') return NODE_BAD
}

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <> 
      {/* <div> */}
        <NodeStyleContainer 
        // className="flex items-center justify-center"
        >
          <StatusNodeText>{data.label.toUpperCase()}</StatusNodeText>
            <StatusControl
              statusColor={statusColors(data.status)}
            >{data.status}
            </StatusControl>
        </NodeStyleContainer>
      {/* <Handle
        type="source"
        position={!data.invert ? Position.Bottom : Position.Top}
        id="1"
        style={sourceHandleStyleA}
      /> */}
      <Handle
        type="target"
        position={!data.invert ? Position.Top : Position.Bottom}
        id="b"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(CustomNode);
