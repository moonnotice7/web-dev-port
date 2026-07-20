type ContactField = "name" | "email" | "message";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "Enter your name.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Enter a message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
