# Tufte Markdown Preview

A VS Code extension that applies Tufte-inspired typography to the built-in markdown preview.

## Features

- Serif typography with centered headings
- Cream paper background (light theme)
- Dark paper background (dark theme)
- Decorative heading underlines
- Comfortable reading width and line height

## Installation

### From VSIX

```bash
code --install-extension tufte-markdown-preview-0.0.1.vsix
```

### Development

```bash
npm install -g @vscode/vsce
cd tufte-markdown-preview
vsce package
code --install-extension tufte-markdown-preview-0.0.1.vsix
```

## Usage

After installation, open any markdown file and use `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux) to open the preview. The Tufte styles will be applied automatically.

## Typography

- **Body font**: Palatino Linotype, Palatino, Book Antiqua, Georgia
- **Code font**: Consolas, Liberation Mono, Menlo
- **Base size**: 18px
- **Line height**: 1.7
- **Max width**: 680px

## Themes

The extension automatically adapts to your VS Code theme:

- **Light themes**: Cream paper (#fffff8) with soft black text
- **Dark themes**: Dark paper (#1c1c1c) with soft white text

## Inspired By

- [Tufte CSS](https://edwardtufte.github.io/tufte-css/)
- [Conductor App](https://conductor.app/)
- [Typora](https://typora.io/)

## License

MIT
