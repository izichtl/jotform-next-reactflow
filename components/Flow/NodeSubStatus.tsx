import { NODE_BAD, NODE_GOD, NODE_REGULAR } from '@/utils/colors';
import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { NodeStyleContainer, StatusBox, StatusControl, StatusNodeText, TextNode } from './style';

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

const statusText = (i: any) => {
  if(i === 'equilibrada' || i === 'Equilíbrio' ) return 'Equilíbrio'
  if(i === 'alerta' || i === 'Alerta') return 'Alerta'
  if(i === 'atencao' || i === 'Atenção') return 'Atenção'
}

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <>
      <StatusBox statusColor={statusColors(data.status)}>
        <StatusControl> 
          {statusText(data.status)}
        </StatusControl>
      </StatusBox>
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
