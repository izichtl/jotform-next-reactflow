import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { IconControl, NodeStyleContainer, StatusControl, TextNode } from './style';

const sourceHandleStyleA: CSSProperties = {
  color: 'blue',
  backgroundColor: 'gray',
  border: '1px',
};

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <> 
      <div>
        <NodeStyleContainer className="flex items-center justify-center">
          <TextNode>{data.label.toUpperCase()}</TextNode>
          <StatusControl>{data.status}</StatusControl>
        </NodeStyleContainer>
      </div>
      <Handle
        type="source"
        position={!data.invert ? Position.Right : Position.Left}
        id="1"
        style={sourceHandleStyleA}
      />
      <Handle
        type="target"
        position={!data.invert ? Position.Left : Position.Right}
        id="b"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(CustomNode);
