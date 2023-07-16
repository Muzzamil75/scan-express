import React from 'react';
import './style.scss';
import { AppThemeColors } from 'src/utils/Constants';
interface ToastProps {
  toastTypes: Array<string>;
}

export const Toast = ({ toastTypes }: ToastProps) => {
  return (
    <div className="toastDiv">
      {!!toastTypes?.length &&
        toastTypes.map((item: string, index: number) => {
          return (
            <div className="toastBody">
              <span
                style={{
                  fontSize: 20,
                  color: AppThemeColors.toastTextColor,
                  alignSelf: 'center',
                }}>
                {item}
              </span>
            </div>
          );
        })}
    </div>
  );
};
