import React, { useState } from "react";
import {
  Download,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  FileText,
  ShieldCheck,
  AlertCircle,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DOWNLOADABLE_RESOURCES, type DownloadableResource } from "@/data/blog-resources";

interface LeadMagnetDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId?: string;
  sourceArticle?: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwkctXlDjG3WpjYwBPWWzEjCbjeF9rLGBv485avxX3tw1_d3ivNgbZcYW4MOB7Q2pzj/exec";

export function LeadMagnetDownloadModal({
  isOpen,
  onClose,
  resourceId = "seller-pre-qualification-script",
  sourceArticle = "Blog Guide",
}: LeadMagnetDownloadModalProps) {
  const resource: DownloadableResource =
    DOWNLOADABLE_RESOURCES[resourceId] || DOWNLOADABLE_RESOURCES["seller-pre-qualification-script"];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg(null);
    setSubmitting(true);

    try {
      // Send directly to the user's Google Apps Script Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          city_province: `Lead Magnet: ${resource.title}`,
          brokerage_name: `Source: ${sourceArticle}`,
        }),
      });

      // Show immediate success state with access to the guide
      setIsSuccess(true);
      setSubmitting(false);
    } catch {
      setErrorMsg(
        "Could not verify details. Please check your connection or contact contact@royalroxn.com.",
      );
      setSubmitting(false);
    }
  }

  function handleReset() {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setErrorMsg(null);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent
        id="lead-magnet-modal"
        className="max-h-[90vh] max-w-xl overflow-y-auto rounded-3xl border border-[color:var(--border)] bg-white p-6 sm:p-8"
      >
        {!isSuccess ? (
          <div>
            <DialogHeader className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)]/20 px-3 py-1 text-xs font-bold text-[color:var(--ink)]">
                <Download className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                <span>Instant Action Resource</span>
              </div>
              <DialogTitle className="mt-3 font-display text-xl font-bold tracking-tight text-[color:var(--ink)] sm:text-2xl">
                {resource.title}
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-xs text-gray-600 sm:text-sm">
                Enter your name, email, and phone number to instantly unlock this complete master
                guide, script blueprints, and executive dossier.
              </DialogDescription>
            </DialogHeader>

            {/* Value Highlights */}
            <div className="mt-4 rounded-2xl bg-amber-50/60 p-4 border border-[color:var(--gold)]/30">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[color:var(--gold)]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>What's Included:</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-gray-700">
                {resource.keyPoints.slice(0, 3).map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--gold)]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <Label
                  htmlFor="magnet-name"
                  className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]"
                >
                  Full Name *
                </Label>
                <Input
                  id="magnet-name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="mt-1 h-11 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="magnet-email"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="magnet-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@brokerage.ca"
                    className="mt-1 h-11 rounded-xl"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="magnet-phone"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-[color:var(--ink)]"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="magnet-phone"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(416) 555-0199"
                    className="mt-1 h-11 rounded-xl"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                id="btn-submit-download"
                type="submit"
                disabled={submitting}
                className="mt-2 h-12 w-full rounded-full bg-[color:var(--ink)] font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-black sm:text-sm"
              >
                {submitting ? (
                  "Submitting to VIP Access..."
                ) : (
                  <>
                    <span>Unlock & Access Guide Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-[color:var(--gold)]" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[color:var(--muted-foreground)]">
                <Lock className="h-3 w-3" />
                <span>100% Confidential. Sent directly to our Canadian Advisory Sheet.</span>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE: Delivered content directly so they receive what they wanted! */
          <div className="py-2 text-left">
            <div className="flex items-center gap-2 text-emerald-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-emerald-800">
                  Verified & Unlocked
                </div>
                <div className="text-xs text-gray-500">
                  Your details have been saved successfully.
                </div>
              </div>
            </div>

            <h3 className="mt-4 font-display text-xl font-extrabold text-[color:var(--ink)] sm:text-2xl">
              {resource.title}
            </h3>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">{resource.subtitle}</p>

            <div className="mt-4 rounded-xl bg-gray-50 p-4 border border-gray-200">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
                <span className="flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-[color:var(--gold)]" />
                  <span>{resource.fileFormat}</span>
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Full Access Granted
                </span>
              </div>
            </div>

            {/* Content Dossier Preview and Reader */}
            <div className="mt-5 space-y-4 max-h-[350px] overflow-y-auto pr-1">
              {resource.contentDossier.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-xs"
                >
                  <h4 className="font-display text-sm font-bold text-[color:var(--ink)]">
                    {item.heading}
                  </h4>
                  <div className="mt-2 space-y-2 text-xs leading-relaxed text-gray-700">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Footer */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--border)] pt-4">
              <Button
                type="button"
                onClick={() => window.print()}
                variant="outline"
                className="h-10 rounded-full border-[color:var(--border)] text-xs font-semibold"
              >
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Print / Save PDF
              </Button>

              <a
                href="/#book"
                onClick={() => handleReset()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-xs font-bold text-[color:var(--ink)] transition-transform hover:scale-105"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Book 5–15 Appointments Call</span>
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
