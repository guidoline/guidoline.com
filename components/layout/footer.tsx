import Link from "next/link";

// Note: Importer des fichiers JSON dans divers composants n'est pas
// des plus optimisé. il est possible d'exploiter l'API pour
// améliorer les performances (au pris d'un peu plus de complécité).

import settingsGlobal from "../../content/settings/global.json"
import settingsNavigation from "../../content/settings/navigation.json"
import Navbar from "../navigation/menu";
const linksSocials = settingsNavigation.socials


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
      { linksSocials.length>0 && <Navbar links={linksSocials} /> }
      </section>
      <section>
        <Link href="/mentions-legales">Mentions légales</Link>
      </section>
    </footer>
  )
}
