import { IconProps } from "./interface";

export function NotesIcon(props: IconProps) {
  return (
    <svg
      fill="none"
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={props.color} strokeWidth={1.5}>
        <path d="M20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 00-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591-2.255-.605-3.383-.907-4.358-.68a4 4 0 00-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905h0l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 001.162 2.011c.731.685 1.859.987 4.114 1.592 2.032.544 3.149.843 4.064.73.1-.012.198-.03.294-.052a4 4 0 002.011-1.16c.685-.732.987-1.86 1.592-4.115z" />
        <path
          d="M16.415 17.974a4 4 0 01-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 01-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 011.162-2.011c.731-.685 1.859-.987 4.114-1.592.426-.114.813-.218 1.165-.309"
          opacity={0.5}
        />
        <g strokeLinecap="round">
          <path d="M11.777 10l4.83 1.294" />
          <path d="M11 12.898l2.898.776" opacity={0.5} />
        </g>
      </g>
    </svg>
  );
}

NotesIcon.defaultProps = {
  color: "#1c274c",
  size: 24,
};
