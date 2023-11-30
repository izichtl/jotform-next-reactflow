import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { AreaIconControl, AreaNodeContainer, AreaNodeText, IconControl, NodeIconContainer, TextNode } from './style';

const sourceHandleStyleA: CSSProperties = {
  color: 'blue',
  backgroundColor: 'gray',
  border: '1px',
};

const NodeArea: FC<NodeProps> = ({ data }) => {
  return (
    <>
      <div>
        <AreaIconControl>{data.icon}</AreaIconControl>
        <AreaNodeContainer className="flex items-center justify-center">
          <AreaNodeText>{data.label}</AreaNodeText>
        </AreaNodeContainer>
      </div>
      <Handle
        type="source"
        position={!data.invert ? Position.Bottom : Position.Top}
        id="1"
        style={sourceHandleStyleA}
      />
      <Handle
        type="target"
        position={!data.invert ? Position.Top : Position.Bottom}
        id="b"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(NodeArea);
