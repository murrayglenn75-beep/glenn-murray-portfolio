const allowedExternalProtocols = new Set(["https:", "mailto:"]);

function hasUnsafeCharacters(value: string) {
  return /[\u0000-\u001F\u007F]/.test(value);
}

export function isSafeExternalUrl(value: string | undefined) {
  if (!value || value !== value.trim() || hasUnsafeCharacters(value)) return false;

  try {
    const url = new URL(value);
    if (!allowedExternalProtocols.has(url.protocol)) return false;
    if (url.protocol === "https:") return Boolean(url.hostname) && !url.username && !url.password;
    return Boolean(url.pathname) && !url.search && !url.hash;
  } catch {
    return false;
  }
}

export function safeExternalUrl(value: string | undefined) {
  return isSafeExternalUrl(value) ? value : undefined;
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
