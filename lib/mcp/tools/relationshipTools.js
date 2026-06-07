import { registerListRelationshipTypes } from './listRelationshipTypes'
import { registerListRelationships } from './listRelationships'
import { registerAddRelationship } from './addRelationship'
import { registerRemoveRelationship } from './removeRelationship'

// Contact relationship tools (types, list, add, remove).
export function registerRelationshipTools(server) {
  registerListRelationshipTypes(server)
  registerListRelationships(server)
  registerAddRelationship(server)
  registerRemoveRelationship(server)
}
