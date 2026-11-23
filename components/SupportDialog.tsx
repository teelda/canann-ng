"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
  // Shown as the main button when the dialog was opened by picking the enquiry type
  onChooseAnother?: () => void;
};

export default function SupportDialog({ open, onClose, onChooseAnother }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // Start keyboard focus on the main action rather than the first button
      dialog.querySelector<HTMLButtonElement>("[data-autofocus]")?.focus({ preventScroll: true });
      dialog.scrollTop = 0;
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // Clicking the dimmed backdrop closes the dialog
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-labelledby="support-dialog-title"
      className="m-auto w-[calc(100%-32px)] max-w-[440px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-[24px] p-0 backdrop:bg-[rgba(12,32,26,0.6)]"
      style={{ backgroundColor: "#ffffff", color: "var(--foreground)", boxShadow: "0 24px 80px rgba(0,0,0,0.25)" }}
    >
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h2 id="support-dialog-title" className="font-medium" style={{ fontSize: 22, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            Thanks for reaching out
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 -mt-1 -mr-1 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-black/5"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          We wish we could help everyone who asks. Right now:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <li className="flex gap-2.5">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            <span><strong className="font-semibold" style={{ color: "var(--foreground)" }}>Devices</strong> (laptops) go to students in our school programmes. We don&apos;t give out phones, and we can&apos;t take personal requests.</span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            <span><strong className="font-semibold" style={{ color: "var(--foreground)" }}>Funding</strong> goes into our own programmes, so we can&apos;t offer grants or personal financial help.</span>
          </li>
        </ul>

        <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "var(--surface)" }}>
          <p className="text-sm font-semibold">Follow us for open events and updates</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-black/5"
                style={{ backgroundColor: "#ffffff", border: "1.5px solid var(--border-solid)" }}
              >
                {label} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
          {onChooseAnother ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-full text-sm font-semibold transition-colors hover:bg-black/5"
                style={{ border: "1.5px solid var(--border-solid)" }}
              >
                Close
              </button>
              <button
                type="button"
                data-autofocus
                onClick={onChooseAnother}
                className="px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Choose another enquiry
              </button>
            </>
          ) : (
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              className="px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Got it
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}
