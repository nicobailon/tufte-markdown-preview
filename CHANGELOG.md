# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-01-06

### Added

- Mermaid diagram rendering in markdown preview
- Custom "tufte" theme for mermaid diagrams matching the extension's warm sepia aesthetic
- Configuration options for mermaid:
  - `tufte-markdown-preview.mermaid.lightTheme` - theme for light mode
  - `tufte-markdown-preview.mermaid.darkTheme` - theme for dark mode
  - `tufte-markdown-preview.mermaid.maxTextSize` - max characters per diagram
  - `tufte-markdown-preview.mermaid.securityLevel` - mermaid security level
- Support for all mermaid diagram types (flowchart, sequence, class, state, ER, gantt, pie, git graph, mindmap, architecture, timeline, etc.)
- Error display styling for invalid mermaid syntax

### Changed

- Extension now requires VS Code 1.74.0+ (was 1.60.0)
- Added TypeScript build system with esbuild

## [0.0.1] - 2025-12-19

### Added

- Initial release
- Tufte-inspired CSS styling for markdown preview
- Light and dark theme support
- Custom typography with Cormorant Garamond for body text
- IBM Plex Mono for code blocks
- Styled headings, lists, blockquotes, tables, and code blocks
