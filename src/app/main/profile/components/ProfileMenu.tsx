import React, { Children, FC } from "react";

interface Props {
  value: any;
  onSelect: (value: any) => void;
}

export const ProfileMenu: FC<Props> = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      {Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isSelected: child.props.value === props.value,
            onClick: () => props.onSelect(child.props.value),
          });
        }
      })}
    </div>
  );
};
