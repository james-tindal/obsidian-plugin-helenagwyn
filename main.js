const obsidian = require('obsidian')

class Plugin extends obsidian.Plugin {
  onload() {
    globalThis.Platform = obsidian.Platform
    globalThis.activeWorkspace = app.internalPlugins.plugins.workspaces.instance.activeWorkspace
  }
}

module.exports = Plugin