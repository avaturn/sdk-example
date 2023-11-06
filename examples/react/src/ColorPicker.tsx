import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  label: string;
  onChange: (color: string) => void;
  className?: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({
  label,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorBtnElement, setColorBtnElement] =
    useState<HTMLButtonElement | null>(null);
  const [colorPickerElement, setColorPickerElement] =
    useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target && colorPickerElement) {
        if (!colorPickerElement.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [colorPickerElement]);

  const { styles, attributes } = usePopper(
    colorBtnElement,
    colorPickerElement,
    {
      modifiers: [
        { name: "arrow" },
        { name: "offset", options: { offset: [0, 10] } },
        {
          name: "preventOverflow",
          options: { mainAxis: true, altAxis: true, padding: 30 },
        },
        { name: "computeStyles" },
      ],
    },
  );

  const handleOpenColorPicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <button
      ref={setColorBtnElement}
      onClick={handleOpenColorPicker}
      className={className}
    >
      {label}
      {isOpen &&
        createPortal(
          <div
            ref={setColorPickerElement}
            style={styles["popper"]}
            {...attributes["popper"]}
            className="color-input__picker"
          >
            <HexColorPicker onChange={onChange} />
            {/* )} */}
          </div>,
          document.querySelector("#root") as Element,
        )}
    </button>
  );
};
