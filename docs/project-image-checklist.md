# Project image checklist

Use this checklist before adding a project cover image, screenshot, or architecture diagram to the portfolio.

## Accuracy and permission

- [ ] The image is a real artefact of the named project, not a placeholder or illustrative stand-in.
- [ ] It contains no confidential, personal, customer, credential, or production-sensitive information.
- [ ] Glenn has permission to publish it and any third-party branding or data is cleared for public use.
- [ ] The image does not claim a capability, deployment, integration, or result that the case study does not state.

## Accessibility and presentation

- [ ] The image is legible at the intended card or case-study size.
- [ ] Alt text describes the meaningful content and purpose; it does not begin with “image of”.
- [ ] A caption is supplied when the viewer needs context not captured by the alt text.
- [ ] A cover image has a landscape crop suitable for the project card.

## File placement and metadata

- [ ] The asset is stored under `public/images/projects/<project-slug>/`.
- [ ] The frontmatter path starts with `/images/projects/` and exactly matches the file.
- [ ] For every declared asset, matching alt text is present.
- [ ] Screenshot paths, alt text, and captions use the same comma-separated order.

## Frontmatter reference

All media fields are optional and remain inactive unless the referenced file exists locally and has alt text.

```yaml
coverImage: /images/projects/signet/cover.png
coverImageAlt: Event stream and verified projection shown in the Signet interface
coverImageCaption: Verified projection generated from append-only source events.
screenshots: /images/projects/signet/timeline.png, /images/projects/signet/evidence.png
screenshotAlts: Event timeline with linked source records, Evidence panel tracing a signal to source events
screenshotCaptions: Append-only event history, Evidence chain for an operational signal
architectureDiagram: /images/projects/signet/architecture.png
architectureDiagramAlt: Signet event flow from append-only events through deterministic projections to AI narration
architectureDiagramCaption: AI narration reads verified projections and cannot modify operational facts.
```

Do not add these fields until the real files are present. The parser filters missing files and incomplete metadata so they cannot accidentally appear in production.
