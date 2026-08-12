import type React from "react"
import type { Metadata } from "next"
import { featuredCars } from "@/data/featuredCars"

type Props = {
  children: React.ReactNode
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params

  const car = featuredCars.find((car) => car.id === id)

  if (!car) {
    return {
      title: "Viatura",
      description: "Consulte as viaturas disponíveis na OTEN MOTORS.",
    }
  }

  const description =
    `${car.name} de ${car.year}, ${car.km}. ` +
    `Disponível na OTEN MOTORS por ${car.price}.`

  return {
    // O layout principal acrescenta automaticamente "| OTEN MOTORS"
    title: car.name,

    description,

    alternates: {
      canonical: `/veiculo/${car.id}`,
    },

    openGraph: {
      type: "website",
      title: `${car.name} | OTEN MOTORS`,
      description,
      url: `https://www.otenmotors.com/veiculo/${car.id}`,
      siteName: "OTEN MOTORS",

      images: car.images?.length
        ? car.images.map((image) => ({
            url: image,
            alt: car.name,
          }))
        : [
            {
              url: car.image,
              alt: car.name,
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${car.name} | OTEN MOTORS`,
      description,
      images: [car.images?.[0] || car.image],
    },
  }
}

export default async function VehicleLayout({
  children,
  params,
}: Props) {
  const { id } = await params

  const car = featuredCars.find((car) => car.id === id)

  if (!car) {
    return children
  }

  /*
   * O teu preço está guardado visualmente como, por exemplo:
   * "21.900€"
   *
   * Para Schema.org queremos:
   * "21900"
   */
  const numericPrice = car.price.replace(/[^\d]/g, "")

  const vehicleUrl =
    `https://www.otenmotors.com/veiculo/${car.id}`

  const absoluteImages = car.images.map((image) => {
    if (image.startsWith("http")) {
      return image
    }

    return `https://www.otenmotors.com${image}`
  })

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    "@id": `${vehicleUrl}#vehicle`,

    name: car.name,

    description:
      car.description.pt ||
      `${car.name} disponível na OTEN MOTORS.`,

    url: vehicleUrl,

    image: absoluteImages,

    brand: {
      "@type": "Brand",
      name: car.name.split(" ")[0],
    },

    offers: {
      "@type": "Offer",

      url: vehicleUrl,

      priceCurrency: "EUR",

      price: numericPrice,

      availability:
        car.status === "disponivel"
          ? "https://schema.org/InStock"
          : car.status === "reservado"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/OutOfStock",

      itemCondition:
        "https://schema.org/UsedCondition",

      seller: {
        "@type": "AutoDealer",

        "@id":
          "https://www.otenmotors.com/#organization",

        name: "OTEN MOTORS",

        url: "https://www.otenmotors.com",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {children}
    </>
  )
}