import { annotateTools } from './annotateTools'

// Every file in ./tools that exports a `register*` function is a tool (or
// group of tools). Load them all and run each — dropping a new file in
// ./tools wires it up automatically, with no central list to maintain.
const modules = require.context('./tools', false, /\.js$/)

const registrarsIn = (mod) =>
  Object.entries(mod)
    .filter(([name]) => name.startsWith('register'))
    .map(([, register]) => register)

// Register every CRM tool on the MCP server instance.
export function registerTools(server) {
  annotateTools(server)

  modules.keys()
    .flatMap((key) => registrarsIn(modules(key)))
    .forEach((register) => register(server))
}
