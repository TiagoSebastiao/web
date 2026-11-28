"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { trackEvent } from "@/lib/analytics"

type Status = "idle" | "sending" | "success" | "error" | "invalid" | "tooMany"

export function ContactForm() {
  const t = useTranslations("contact")
  const locale = useLocale()
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      })

      if (response.ok) {
        form.reset()
        setStatus("success")
        trackEvent("generate_lead", { form: "contact", page: location.pathname })
      } else {
        setStatus(response.status === 400 ? "invalid" : response.status === 429 ? "tooMany" : "error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" aria-hidden="true" />
        <p className="max-w-sm text-lg font-semibold text-foreground">{t("success")}</p>
      </div>
    )
  }

  const sending = status === "sending"

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      <div>
        <Label htmlFor="contact-name">{t("name")}</Label>
        <Input id="contact-name" name="name" autoComplete="name" required maxLength={120} className="mt-2 h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 transition-colors focus-visible:border-primary focus-visible:ring-primary/30" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="contact-email">{t("email")}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className="mt-2 h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 transition-colors focus-visible:border-primary focus-visible:ring-primary/30"
          />
        </div>
        <div>
          <Label htmlFor="contact-phone">
            {t("phone")} <span className="font-normal text-muted-foreground">({t("optional")})</span>
          </Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className="mt-2 h-12 rounded-xl border-white/10 bg-white/[0.03] px-4 transition-colors focus-visible:border-primary focus-visible:ring-primary/30" />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">{t("message")}</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={3000}
          placeholder={t("messagePlaceholder")}
          className="mt-2 resize-y rounded-xl border-white/10 bg-white/[0.03] px-4 py-3 transition-colors focus-visible:border-primary focus-visible:ring-primary/30"
        />
      </div>

      {/* Campo-armadilha para bots: invisível para pessoas. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {(status === "error" || status === "invalid" || status === "tooMany") && (
        <p role="alert" className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground">
          {status === "invalid" ? t("invalid") : status === "tooMany" ? t("tooMany") : t("error")}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-glow inline-flex h-14 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? t("sending") : t("send")}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        {t.rich("privacy", {
          link: (chunks) => (
            <Link href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
              {chunks}
            </Link>
          ),
        })}
      </p>
    </form>
  )
}
