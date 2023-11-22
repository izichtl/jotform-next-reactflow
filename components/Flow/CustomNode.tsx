import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps, NodeResizer } from 'reactflow';

const sourceHandleStyleA: CSSProperties = {
  color: 'blue',
  backgroundColor: 'gray',
  border: '1px',
};

const CustomNode: FC<NodeProps> = ({ data, xPos, yPos, color }) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <strong>{data.label}</strong>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="1"
        style={sourceHandleStyleA}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(CustomNode);
