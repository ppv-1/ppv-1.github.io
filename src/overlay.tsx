import React, { forwardRef } from "react";

type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
    caption: React.RefObject<HTMLDivElement>;
    scroll: React.RefObject<{ current: number }>;
};

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({ caption, scroll, ...rest }, ref) => (
    <div
        ref={ref}
        className="scroll"
        onScroll={(e) => {
            scroll.current.current =
                e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - window.innerHeight);
            caption.current!.innerText = scroll.current.current.toFixed(2);
        }}
        {...rest}
    >
        <div style={{ height: "200vh"}}>
            <div className="dot">
                <h1>hello</h1>
            </div>
        </div>
        <div style={{ height: "400vh"}}>
            <div className="dot">
                <h1>hello 2</h1>
            </div>
        </div>
        <div style={{ height: "400vh"}}>
            <div className="dot">
                <h1>hello 3</h1>
            </div>
        </div>
        <span className="caption" ref={caption}>
            0.00
        </span>
    </div>
))