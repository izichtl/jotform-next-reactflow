import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { IconControl, NodeIconContainer, TextNode } from './style';

const sourceHandleStyleA: CSSProperties = {
  color: 'blue',
  backgroundColor: 'gray',
  border: '1px',
};

const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <>
      <div>
        <NodeIconContainer className="flex items-center justify-center">
          <IconControl>{data.icon}</IconControl>
          <TextNode>{data.label}</TextNode>
        </NodeIconContainer>
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
