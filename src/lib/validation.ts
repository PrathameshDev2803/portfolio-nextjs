export const ALLOWED_SUBJECTS = [
  "Job Opportunity",
  "Freelance Project",
  "Website Development",
  "Collaboration",
  "General Enquiry",
  "Other",
] as const;

export type SubjectOption = (typeof ALLOWED_SUBJECTS)[number];

/**
 * Validates email according to RFC standards, rejecting invalid local-parts,
 * invalid domains, missing TLDs, consecutive dots, and internal whitespace.
 */
export function validateEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  if (/\s/.test(trimmed)) return false;

  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  // Local part validation
  if (!local || local.length > 64) return false;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return false;
  }
  if (!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local)) {
    return false;
  }

  // Domain part validation
  if (!domain || domain.length < 4 || domain.length > 255) return false;
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) {
    return false;
  }
  if (domain.startsWith("-") || domain.endsWith("-")) return false;

  const labels = domain.split(".");
  if (labels.length < 2) return false;

  for (const label of labels) {
    if (!label || label.length > 63) return false;
    if (label.startsWith("-") || label.endsWith("-")) return false;
    if (!/^[a-zA-Z0-9-]+$/.test(label)) return false;
  }

  // TLD must be alphabetic and at least 2 characters
  const tld = labels[labels.length - 1];
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

  return true;
}

