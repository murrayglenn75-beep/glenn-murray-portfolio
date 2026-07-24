"use client";

import { useState, type FormEvent } from "react";
import { primaryContactEmail } from "@/data/profile";

type FieldName = "name" | "email" | "subject" | "message";
type FieldValueName = FieldName | "organisation";
type FormErrors = Partial<Record<FieldValueName, string>>;

const requiredFields: FieldName[] = ["name", "email", "subject", "message"];
const fieldLimits: Record<FieldValueName, number> = { name: 120, email: 254, organisation: 160, subject: 160, message: 4000 };

function readValue(data: FormData, field: FieldValueName) {
  return String(data.get(field) || "").trim();
}

function normalizeLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function normalizeMessage(value: string) {
  return value.replace(/\r\n?/g, "\n").replace(/[\u0000\u007F]/g, "").trim();
}

function buildMailto(data: FormData) {
  const name = normalizeLine(readValue(data, "name"));
  const email = normalizeLine(readValue(data, "email"));
  const organisation = normalizeLine(readValue(data, "organisation"));
  const subject = normalizeLine(readValue(data, "subject"));
  const message = normalizeMessage(readValue(data, "message"));
  const body = [`Name: ${name}`, `Email: ${email}`, organisation ? `Organisation: ${organisation}` : "", "", message].filter(Boolean).join("\n");
  return `mailto:${primaryContactEmail}?subject=${encodeURIComponent(`Portfolio enquiry: ${subject}`)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function validate(form: HTMLFormElement) {
    const nextErrors: FormErrors = {};
    const data = new FormData(form);

    (Object.keys(fieldLimits) as FieldValueName[]).forEach((field) => {
      if (readValue(data, field).length > fieldLimits[field]) nextErrors[field] = `Use no more than ${fieldLimits[field]} characters.`;
    });
    requiredFields.forEach((field) => {
      if (!readValue(data, field)) nextErrors[field] = "This field is required.";
    });

    const email = readValue(data, "email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length > 0) return;

    window.location.assign(buildMailto(new FormData(event.currentTarget)));
    setStatus("Your email app should open a draft. No message has been sent by this site.");
  }

  return <form noValidate onSubmit={handleSubmit} className="grid gap-5" aria-describedby="contact-form-note">
    <p id="contact-form-note" className="text-sm leading-6 text-slate-400">This form opens a local email draft. It does not send or store your message.</p>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" required error={errors.name} autoComplete="name" maxLength={fieldLimits.name} /><Field label="Email" name="email" type="email" required error={errors.email} autoComplete="email" maxLength={fieldLimits.email} /></div>
    <Field label="Company or organisation" name="organisation" error={errors.organisation} autoComplete="organization" maxLength={fieldLimits.organisation} />
    <Field label="Subject" name="subject" required error={errors.subject} maxLength={fieldLimits.subject} />
    <Field label="Message" name="message" required error={errors.message} multiline maxLength={fieldLimits.message} />
    <button type="submit" className="w-fit rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">Open email draft</button>
    {status && <p role="status" className="text-sm leading-6 text-blue-300">{status}</p>}
  </form>;
}

type FieldProps = { label: string; name: FieldValueName; type?: "email" | "text"; required?: boolean; error?: string; autoComplete?: string; multiline?: boolean; maxLength: number };

function Field({ label, name, type = "text", required = false, error, autoComplete, multiline = false, maxLength }: FieldProps) {
  const inputId = `contact-${name}`;
  const errorId = `${inputId}-error`;
  const className = "rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-blue-400";
  return <label className="grid gap-2 text-sm text-slate-300" htmlFor={inputId}>{label}{required && <span aria-hidden="true" className="ml-1 text-blue-300">*</span>}{multiline ? <textarea id={inputId} name={name} rows={6} required={required} maxLength={maxLength} aria-required={required || undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={className} /> : <input id={inputId} name={name} type={type} required={required} maxLength={maxLength} autoComplete={autoComplete} aria-required={required || undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={className} />}{error && <span id={errorId} role="alert" className="text-xs text-red-300">{error}</span>}</label>;
}
