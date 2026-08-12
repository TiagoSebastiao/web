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
      description:
        "Consulte as viaturas disponíveis na OTEN MOTORS.",
    }
  }

  const description =
    `${car.name} de ${car.year}, ${car.fuel}, ` +
    `${car.transmission}, ${car.km}, por ${car.price}. ` +
    `Disponível na OTEN MOTORS.`

  return {
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

      images: [
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
      images: [car.image],
    },
  }
}

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}