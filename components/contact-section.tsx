"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        alert(result.error || "Erro ao enviar mensagem. Tente novamente.")
        return
      }

      alert("Mensagem enviada! Entraremos em contacto em breve.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch {
      alert("Erro ao enviar mensagem. Tente novamente.")
    }
  }

  return (
    <section
      id="contactos"
      ref={ref}
      className="scroll-mt-20 bg-muted/30 py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        {/* 🔥 Título */}
        <div
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              {t.contact.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-3/4 rounded-full bg-primary" />
          </div>
        </div>

        {/* 🔥 FORM */}
        <div className="mx-auto max-w-2xl">
          <Card
            className={`rounded-2xl border border-border bg-card shadow-lg transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl font-black uppercase tracking-tight md:text-2xl">
                {t.contact.formTitle}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-1 h-11"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">{t.contact.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1 h-11"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.contact.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="mt-1 h-11"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="mt-1 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary py-5 text-sm font-black uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.01] hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 md:text-base"
                >
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* 🔥 CONTACT CARDS (EM BAIXO) */}
        <div
          className={`mt-8 grid gap-4 sm:grid-cols-3 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* WhatsApp */}
          <Card className="rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
            <CardContent className="flex flex-col items-center p-5 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-3 text-sm font-black uppercase tracking-tight">
                {t.contact.whatsapp}
              </h3>

              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a
                  href="https://wa.me/351967339061"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contact.contactButton}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Telefone */}
          <Card className="rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
            <CardContent className="flex flex-col items-center p-5 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-3 text-sm font-black uppercase tracking-tight">
                {t.contact.phone}
              </h3>

              <a
                href="tel:+351967339061"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                +351 967 339 061
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
            <CardContent className="flex flex-col items-center p-5 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-3 text-sm font-black uppercase tracking-tight">
                {t.contact.email}
              </h3>

              <a
                href="mailto:geral@otenmotors.com"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                geral@otenmotors.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}