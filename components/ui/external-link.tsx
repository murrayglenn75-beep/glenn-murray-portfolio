import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isSafeExternalUrl } from "@/lib/security";

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "target"> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  if (!isSafeExternalUrl(href)) return null;

  const opensNewTab = href.startsWith("https:");
  return <a href={href} {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>{children}</a>;
}
