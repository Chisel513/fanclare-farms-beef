import { Camera } from "lucide-react";

export default function ImagePlaceholder() {
  return (
    <div className="w-full h-full bg-fanclare-tan flex flex-col items-center justify-center gap-2.5 select-none">
      <Camera
        className="text-fanclare-green/40"
        size={30}
        strokeWidth={1.25}
      />
      <p className="text-fanclare-green/55 text-[11px] font-semibold tracking-widest uppercase">
        Photo Coming Soon
      </p>
    </div>
  );
}
