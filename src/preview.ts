import mermaid from 'mermaid';

const TUFTE_LIGHT = {
  theme: 'base' as const,
  themeVariables: {
    primaryColor: '#f2ede5',
    primaryTextColor: '#2a2520',
    primaryBorderColor: '#cdc3b4',
    lineColor: '#7d6850',
    secondaryColor: '#f9f7f3',
    tertiaryColor: '#e8e2d8',
    background: '#f9f7f3',
    mainBkg: '#f2ede5',
    textColor: '#2a2520',
    nodeBorder: '#cdc3b4',
    clusterBkg: '#f9f7f3',
    clusterBorder: '#cdc3b4',
    titleColor: '#2a2520',
    edgeLabelBackground: '#f9f7f3',
  }
};

const TUFTE_DARK = {
  theme: 'base' as const,
  themeVariables: {
    primaryColor: '#252220',
    primaryTextColor: '#e7e2d9',
    primaryBorderColor: '#3d362d',
    lineColor: '#c9b79a',
    secondaryColor: '#1c1917',
    tertiaryColor: '#2d2a26',
    background: '#1c1917',
    mainBkg: '#252220',
    textColor: '#e7e2d9',
    nodeBorder: '#3d362d',
    clusterBkg: '#1c1917',
    clusterBorder: '#3d362d',
    titleColor: '#e7e2d9',
    edgeLabelBackground: '#1c1917',
  }
};

interface Config {
  lightTheme: string;
  darkTheme: string;
  maxTextSize: number;
  securityLevel: string;
}

function getConfig(): Config {
  const el = document.getElementById('tufte-mermaid-config');
  return {
    lightTheme: el?.dataset.lightTheme || 'tufte',
    darkTheme: el?.dataset.darkTheme || 'tufte',
    maxTextSize: parseInt(el?.dataset.maxTextSize || '50000', 10),
    securityLevel: el?.dataset.securityLevel || 'strict',
  };
}

function isDarkMode(): boolean {
  return document.body.classList.contains('vscode-dark') ||
         document.body.classList.contains('vscode-high-contrast');
}

function getThemeConfig(themeName: string, isDark: boolean) {
  if (themeName === 'tufte') {
    return isDark ? TUFTE_DARK : TUFTE_LIGHT;
  }
  return { theme: themeName as 'default' | 'dark' | 'neutral' | 'forest' };
}

async function renderMermaidBlocks() {
  for (const el of document.querySelectorAll<HTMLElement>('.mermaid svg')) {
    el.remove();
  }
  for (const el of document.querySelectorAll<HTMLElement>('.mermaid .mermaid-error')) {
    el.remove();
  }

  const blocks = document.querySelectorAll<HTMLElement>('pre > code.language-mermaid');

  for (const code of blocks) {
    const pre = code.parentElement;
    if (!pre) continue;

    const source = code.textContent || '';
    const container = document.createElement('div');
    container.className = 'mermaid';

    try {
      await mermaid.parse(source);
      const result = await mermaid.render(`mermaid-${crypto.randomUUID()}`, source);
      container.innerHTML = result.svg;
      result.bindFunctions?.(container);
    } catch (err) {
      const errorEl = document.createElement('pre');
      errorEl.className = 'mermaid-error';
      errorEl.textContent = err instanceof Error ? err.message : 'Diagram rendering error';
      container.appendChild(errorEl);
    }

    pre.replaceWith(container);
  }
}

function init() {
  const config = getConfig();
  const isDark = isDarkMode();
  const themeName = isDark ? config.darkTheme : config.lightTheme;
  const themeConfig = getThemeConfig(themeName, isDark);

  mermaid.initialize({
    startOnLoad: false,
    maxTextSize: config.maxTextSize,
    securityLevel: config.securityLevel as 'strict' | 'loose' | 'antiscript' | 'sandbox',
    ...themeConfig,
  });

  renderMermaidBlocks();
}

window.addEventListener('vscode.markdown.updateContent', init);
init();
