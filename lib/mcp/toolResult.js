// Wrap a controller's result as an MCP text-content payload.
export function toolResult(data) {
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}
