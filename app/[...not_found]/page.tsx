// Note: ne devrais pas être nécessaire avec next 13.3
import { notFound } from "next/navigation"
export default function NotFoundCatchAll() {
  notFound()
}
