/**
 * Implémentation d'un modèle de données pour
 * des fichiers de paramètres du site.
 *
 * @todo : Ce modèle est à refactorer suite à la réecriture
 * de `Model/index.ts`.
 */

import { DataValues, Model, ModelValues } from ".";

// Entrée
// type DataSettingsValues = DataValues & JSON
type DataSettingsValues = DataValues & JSONValue

// Sortie
export type ModelSettingsValues = ModelValues & {
  name: string
}

export class ModelSettings extends Model<ModelSettingsValues, DataSettingsValues> {
  // ... Stuff que doit fait un modèle de settings
}

/** JSON file utilities */
import fs from "fs"
import path from "path"

// cf .https://stackoverflow.com/questions/48664406/how-to-create-object-based-on-interface-typescript
type JSONValue =
 string
 | number
 | boolean
 | null
 | Array<JSONValue>
 | { [x: string]: JSONValue}

interface JSONObject {
 [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }

export function getJSON(dirPath: string): JSONArray {
  return fs
    .readdirSync(dirPath)
    .filter(f => isJSONFile(path.join(dirPath, f)))
}

const exts = [".json"]
function isJSONFile(filePath: string): boolean {
  if (fs.statSync(filePath).isDirectory()) return false
  if (!exts.includes(path.extname(filePath))) return false
  return true
}
