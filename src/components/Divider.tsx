interface DividerProps {
  size?: number;
  margin?: string | number;
}

export function DividerX({ size = 0.2, margin = "1rem" }: DividerProps) {
  return <div style={{ height: size, margin }} className="bg-gray-300"></div>;
}

export function DividerY({ size = 0.2, margin = "1rem" }: DividerProps) {
  return <div style={{ width: size, margin }} className="bg-gray-300"></div>;
}
