"use client";

import { useState, type FormEvent } from "react";

type FieldName = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const requiredFields: FieldName[] = ["name", "email", "subject", "message"];

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPreviewed, setIsPreviewed] = useState(false);

  function validate(form: HTMLFormElement) {
    const nextErrors: FormErrors = {};
    const data = new FormData(form);

    requiredFields.forEach((field) => {
      if (!String(data.get(field) || "").trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    const email = String(data.get("email") || "").trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    setIsPreviewed(Object.keys(nextErrors).length === 0);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5" aria-describedby="contact-form-note">
      <p id="contact-form-note" className="text-sm leading-6 text-slate-400">This is a form preview. It validates your message but does not send or store it until a contact delivery method is configured.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" required error={errors.email} autoComplete="email" />
      </div>
      <Field label="Company or organisation" name="organisation" autoComplete="organization" />
      <Field label="Subject" name="subject" required error={errors.subject} />
      <Field label="Message" name="message" required error={errors.message} multiline />
      <button type="submit" className="w-fit rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">Validate message</button>
      {isPreviewed && <p role="status" className="text-sm leading-6 text-blue-300">Your message details are valid, but no message was sent. Configure a delivery method before publishing this form.</p>}
    </form>
  );
}

type FieldProps = { label: string; name: string; type?: "email" | "text"; required?: boolean; error?: string; autoComplete?: string; multiline?: boolean };

function Field({ label, name, type = "text", required = false, error, autoComplete, multiline = false }: FieldProps) {
  const inputId = `contact-${name}`;
  const errorId = `${inputId}-error`;
  const className = "rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-blue-400";
  return <label className="grid gap-2 text-sm text-slate-300" htmlFor={inputId}>{label}{required && <span aria-hidden="true" className="ml-1 text-blue-300">*</span>}{multiline ? <textarea id={inputId} name={name} rows={6} required={required} aria-required={required || undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={className} /> : <input id={inputId} name={name} type={type} required={required} autoComplete={autoComplete} aria-required={required || undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={className} />}{error && <span id={errorId} role="alert" className="text-xs text-red-300">{error}</span>}</label>;
}
