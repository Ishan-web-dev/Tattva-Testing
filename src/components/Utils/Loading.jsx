"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#18120d]">
            <div className="flex flex-col items-center gap-6">
                {/* Brand */}
                <div className="text-center">
                    <h1 className="text-2xl font-semibold tracking-[0.3em] text-[#e9c176]">
                        INCH N SPACE
                    </h1>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#eee0d6]/60">
                        Architecture · Interiors · Design
                    </p>
                </div>

                {/* Loader */}
                <div className="h-[2px] w-40 overflow-hidden bg-[#eee0d6]/20">
                    <div className="h-full w-1/2 animate-loader bg-[#e9c176]" />
                </div>
            </div>
        </div>
    );
}