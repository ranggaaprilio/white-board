"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton
        color={{
          r: 94,
          g: 171,
          b: 214,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 254,
          g: 251,
          b: 199,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 255,
          g: 180,
          b: 180,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 225,
          g: 68,
          b: 52,
        }}
        onClick={onChange}
      />
      <ColorButton
        color={{
          r: 232,
          g: 152,
          b: 138,
        }}
        onClick={onChange}
      />
    </div>
  );
};

interface ColorButtonProps {
  color: Color;
  onClick: (color: Color) => void;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          backgroundColor: colorToCss(color),
        }}
      />
    </button>
  );
};
