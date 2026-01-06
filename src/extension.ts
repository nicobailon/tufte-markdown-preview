import type MarkdownIt from 'markdown-it';
import * as vscode from 'vscode';

const CONFIG_SECTION = 'tufte-markdown-preview';

export function activate(ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration(CONFIG_SECTION)) {
        vscode.commands.executeCommand('markdown.preview.refresh');
      }
    })
  );

  return {
    extendMarkdownIt(md: MarkdownIt) {
      const render = md.renderer.render.bind(md.renderer);
      md.renderer.render = function (
        tokens: Parameters<typeof render>[0],
        options: Parameters<typeof render>[1],
        env: Parameters<typeof render>[2]
      ): string {
        const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
        const lightTheme = config.get('mermaid.lightTheme', 'tufte');
        const darkTheme = config.get('mermaid.darkTheme', 'tufte');
        const maxTextSize = config.get('mermaid.maxTextSize', 50000);
        const securityLevel = config.get('mermaid.securityLevel', 'strict');

        const configSpan = `<span id="tufte-mermaid-config" aria-hidden="true" style="display:none"
          data-light-theme="${lightTheme}"
          data-dark-theme="${darkTheme}"
          data-max-text-size="${maxTextSize}"
          data-security-level="${securityLevel}"></span>`;

        return configSpan + render(tokens, options, env);
      };
      return md;
    }
  };
}

export function deactivate() {}
