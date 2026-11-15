"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Laptop, HandCoins, ArrowRight } from "lucide-react";
import { DEVICE_SUPPORT_ANSWER, FUNDING_SUPPORT_ANSWER, SOCIAL_LINKS } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
  // Shown as the main button when the dialog was opened by picking the enquiry type
  onChooseAnother?: () => void;
};

const INSTAGRAM = SOCIAL_LINKS.find((s) => s.label === "Instagram")?.href;

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
      className="m-auto w-[calc(100%-32px)] max-w-[520px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-[24px] p-0 backdrop:bg-[rgba(12,32,26,0.6)]"
      style={{ backgroundColor: "#ffffff", color: "var(--foreground)", boxShadow: "0 24px 80px rgba(0,0,0,0.25)" }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="support-dialog-title" className="font-medium" style={{ fontSize: 24, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            Thank you for reaching out
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-black/5"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          We know a laptop, a phone or a little financial help can change a lot, and we wish we could help everyone who asks. Here&apos;s how our support works today.
        </p>

        <div className="mt-6 space-y-3">
          {[
            { icon: Laptop, title: "Devices", body: DEVICE_SUPPORT_ANSWER },
            { icon: HandCoins, title: "Funding", body: FUNDING_SUPPORT_ANSWER },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-2xl p-4" style={{ backgroundColor: "var(--surface)" }}>
              <div className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center shrink-0" style={{ backgroundColor: "var(--accent-light)" }}>
                <Icon size={17} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold">Ways to stay connected</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <Link href="/causes" className="inline-flex items-center gap-1.5 font-semibold" style={{ color: "var(--accent)" }}>
              See the programmes we run in schools <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </li>
          {INSTAGRAM && (
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold" style={{ color: "var(--accent)" }}>
                Follow us on Instagram for open events <ArrowRight size={14} aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>

        <div className="mt-7 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
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
