"use client";

import {
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type LiveSiteButtonProps = {
  href: string;
  projectName: string;
  className?: string;
  children: ReactNode;
};

export function LiveSiteButton({
  href,
  projectName,
  className = "",
  children,
}: LiveSiteButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const dialog =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="live-site-overlay fixed inset-0 z-[9999] flex items-center justify-center p-5"
            role="presentation"
          >
            <button
              type="button"
              aria-label="Close dialog"
              className="live-site-backdrop absolute inset-0"
              onClick={() => setOpen(false)}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="live-site-dialog relative z-10 w-full max-w-md rounded-2xl border border-ink/10 bg-cream p-6"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                Live site
              </p>
              <h2
                id={titleId}
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink"
              >
                Open {projectName}?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">
                Continue to the live project site, or stay on this portfolio.
              </p>
              <p className="mt-3 truncate rounded-lg bg-ink/5 px-3 py-2 text-[13px] text-ink">
                {href}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={href} className="btn-primary !px-4 !py-2 !text-[13px]">
                  Continue to site
                </a>
                <button
                  type="button"
                  className="btn-ghost !px-4 !py-2 !text-[13px]"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={`live-site-btn ${className}`.trim()}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {dialog}
    </>
  );
}
