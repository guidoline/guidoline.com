import Link from "next/link";
import settingsGlobal from "../../content/settings/global.json"

// Note: Ce fichier illustre l'usage d'un fichier Markdown pour afficher
// diverse type de données.

export function Footer() {
  const contactRouen = settingsGlobal.contacts.main
  // @todo: affocher l'adresse de Sotteville
  return (
    <footer>
      <section>
        <h1>{settingsGlobal.name}</h1>
        <div dangerouslySetInnerHTML={{__html:settingsGlobal.about}} />
      </section>
      <section>
        <h1>{contactRouen.name}</h1>
        <p>{contactRouen.description}</p>
        <address>
          {contactRouen.address.street}<br/>
          {contactRouen.address.zipcode} {contactRouen.address.city}
        </address>
        <p>
          <strong>Horaires</strong><br/>
          {contactRouen.hours}
        </p>
        <p>
          <a href={`mailto:${contactRouen.email}`}>{contactRouen.email}</a><br/>
          <a href={`tel:${contactRouen.phone}`}>{contactRouen.phone}</a>
        </p>
      </section>
      <section>
        <Link href="/mentions-legales">Mentions légales</Link>
      </section>
    </footer>
  )
}
