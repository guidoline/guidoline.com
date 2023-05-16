/**
 * Modèle de données
 *
 * Repésentation normalisé des données en lecture seulement.
 *
 * @todo : exploiter les espaces de noms de Typescript
 * https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html#needless-namespacing
 *
 */

/**
 * Normalisation des donnes d'entrées.
 * Celle fournis par al source de données.
 */
export type DataValues = {
  id?: string | number | null
}

/**
 * Normalisation des données de sorties.
 * Celle attendus pour les composants.
 */
export type ModelValues = {
  id: string
}

export class Model<M extends ModelValues, D extends DataValues>{
  #data: Array<M> = []

  /**
   * Normaliser les données brut et les enregistrer dans le modèle.
   * @param data Données à normaliser
   */
  loadData(data: Array<D>) {
    this.#data = this.normalize(data)
  }

  /**
   * Récupérer une entrée à partir de son identifiant.
   *
   * @param id Identifiant de l'entrée
   * @param fields Champs à retourner
   * @returns Donnée normalisée <M>
   */
  find(id: string, fields: (keyof M)[] = ["id"] as (keyof M)[] ): M | null {
    const item = this.#data.find(i => {
      return i.id == id
    })

    if (!item) return null
    // Séléctionner les champs requis
    const result = {} as M
    fields.forEach(f => {
      if (item[f]) result[f] = item[f]
    })
    return result
  }

  /**
   * Récupérer toute les données.
   *
   * @todo: implémenter des paramètres de paginations :
   *  - offset : index de minimum
   *  - limit : nombre d'entrée à retourner
   *  - sortBy : trie des données par clef
   *
   * @param fields Champs à retourner
   * @return Tableau de données normalisée Array<M>
   */
  findAll(fields: (keyof M)[] = ["id"] as (keyof M)[]): Array<M> {
    return this.#data.map(item => {
      const result = {} as M
      fields.forEach(f => {
        result[f] = item[f]
      })
      return result
    })
  }


  /**
   * Normaliseur de données.
   *
   * Filtre les données d'entrés (D) pour les faire correspondre aux
   * données de sorties attendus (M)
   *
   * Cette méthode doit être implémentée pour chaque modèle.
   */
  normalize(data: Array<D>): Array<M> {
    return data.map(i => ({
      // Générer un id unique par exemple
      id: i.id || crypto.randomUUID()
    })) as M[]
  }
}
