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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensagem enviada! Entraremos em contacto em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contactos" ref={ref} className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div
          className={`mb-12 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-block">
            <h2 className="text-5xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
              {t.contact.title}
            </h2>
            <div className="mt-4 h-1 w-full bg-primary"></div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-8">
          {/* Contact Form */}
          <Card
            className={`border-border bg-card transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase tracking-tight text-center">
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t.contact.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.contact.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary py-6 text-base font-bold uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
                >
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div
            className={`grid gap-4 sm:grid-cols-3 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Card className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-tight">WhatsApp</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => window.open("https://wa.me/351912345678", "_blank")}
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-tight">Telefone</h3>
                <p className="text-sm font-medium text-muted-foreground">+351 912 345 678</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-tight">Email</h3>
                <p className="text-sm font-medium text-muted-foreground">info@otenmotors.pt</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
