import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  const t = useTranslations("notFound")

  return (
    <>
      <Header />
      <main className="container mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-6xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-foreground">{t("title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("text")}</p>
        <Link
          href="/#veiculos"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 font-bold text-primary-foreground hover:bg-primary/90"
        >
          {t("cta")}
        </Link>
      </main>
      <Footer />
    </>
  )
}
