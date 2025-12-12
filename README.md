# Tufte Markdown Preview

A VS Code extension that applies elegant, Tufte-inspired typography to the built-in markdown preview.

## Features

- Cormorant Garamond serif typography with centered headings
- Warm sepia-toned color palette
- Gradient heading underlines that fade from center
- Floral ornament dividers
- Book-style paragraph indentation
- Custom styled lists with accent-colored bullets
- Gradient blockquote borders
- Subtle shadows on code blocks and images
- Automatic light/dark theme support

## Installation

```bash
git clone https://github.com/nicobailon/tufte-markdown-preview.git
cd tufte-markdown-preview
npx @vscode/vsce package
code --install-extension tufte-markdown-preview-0.0.1.vsix
```

## Usage

After installation, open any markdown file and use `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux) to open the preview.

## Typography

- **Body font**: Cormorant Garamond, Crimson Text, Libre Baskerville, Georgia
- **Code font**: JetBrains Mono, Fira Code, SF Mono, Consolas
- **Base size**: 19px
- **Line height**: 1.75
- **Max width**: 800px

## Themes

The extension automatically adapts to your VS Code theme:

- **Light**: Warm paper (#faf9f6) with sepia accents (#8b7355)
- **Dark**: Deep charcoal (#171614) with golden accents (#c9a87c)

## Inspired By

- [Tufte CSS](https://edwardtufte.github.io/tufte-css/)
- [Conductor App](https://conductor.app/)
- [Typora](https://typora.io/)

## License

MIT
