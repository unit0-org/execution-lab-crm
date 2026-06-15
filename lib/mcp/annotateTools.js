import { toolAnnotations } from './tools/toolAnnotations'

// Wrap server.tool so every registration carries MCP annotation hints
// (read-only / destructive) keyed by tool name — without editing each
// tool file. The hints slot in just before the handler, where the SDK
// reads annotations.
export function annotateTools(server) {
  const register = server.tool.bind(server)

  server.tool = (name, ...rest) => {
    const handler = rest.pop()

    return register(name, ...rest, toolAnnotations(name), handler)
  }

  return server
}
