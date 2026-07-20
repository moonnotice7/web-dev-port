import { cn } from "@/lib/utils";

interface SkillIconProps {
  id: string;
  className?: string;
}

const iconClass = "h-6 w-6";

function FallbackIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-6 w-6 items-center justify-center font-mono text-[10px] font-medium uppercase tracking-tight text-muted",
        className
      )}
      aria-hidden="true"
    >
      {name.slice(0, 2)}
    </span>
  );
}

export function SkillIcon({ id, className }: SkillIconProps) {
  const props = {
    className: cn(iconClass, "text-foreground/80", className),
    "aria-hidden": true as const,
  };

  switch (id) {
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M11.5 2.5h1L19 20.5h-2.1l-1.4-3.7H8.5l-1.4 3.7H5L11.5 2.5zm1 6.2-2.8 7.3h5.6l-2.8-7.3z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 10.2c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8zm8.2 1.8c0-.5 0-1-.1-1.5-1.2.1-2.3.3-3.3.7.1.5.2 1 .2 1.5 0 .5-.1 1-.2 1.5 1 .4 2.1.6 3.3.7.1-.5.1-1 .1-1.5zm-8.2 6.2c-1.5 0-2.9-.2-4.2-.5.3 1.3.7 2.4 1.2 3.2 1-.3 2-.7 2.9-1.2-.1-.5-.1-1-.1-1.5 0-.3 0-.7.1-1zm0-12.4c-1.5 0-2.9.2-4.2.5-.3-1.3-.7-2.4-1.2-3.2 1 .3 2 .7 2.9 1.2.1.5.1 1 .1 1.5 0 .3 0 .7-.1 1zm-3.8 9.2c-1-.4-2.1-.6-3.3-.7-.1.5-.1 1-.1 1.5s0 1 .1 1.5c1.2-.1 2.3-.3 3.3-.7-.1-.5-.2-1-.2-1.5 0-.5.1-1 .2-1.5zm3.8-3.4c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM4.8 8.5c.4-1 .9-1.9 1.2-3.2-1.3.3-2.7.7-3.9 1.2.3.5.6 1 .9 1.5.6-.2 1.2-.3 1.8-.5zm0 7c-.6.2-1.2.3-1.8.5-.3.5-.6 1-.9 1.5 1.2.5 2.6.9 3.9 1.2-.3-1.3-.8-2.2-1.2-3.2z" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M4 4h16v16H4V4zm8.5 10.5v3.5h-1.5v-3.5H9v-1.5h6v1.5h-2.5zm4.5-1.5h-1.5v5H15v-5z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 6.5c3 0 4.7 1.5 5.1 4.5 1.9-1.5 3.7-2.1 5.4-1.7 1.2.3 2.1 1.1 2.7 2.3-1.7-.9-3.3-.6-4.8.9-1.5 1.5-2.3 3.7-2.3 6.5H9.8c0-3.5 1.8-5.3 4.4-6.5-1.2-.8-2.8-.8-4.4 0C6.2 8.7 4.4 10.5 4.4 14H2c0-2.8.8-5 2.3-6.5 1.5-1.5 3.1-1.8 4.8-.9-.6-1.2-1.5-2-2.7-2.3-1.7-.4-3.5.2-5.4 1.7.4-3 2.1-4.5 5.1-4.5 2.2 0 3.8 1 4.9 2.5C8.2 7.5 9.8 6.5 12 6.5z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.2 6.8 3.8L12 11.8 5.2 8 12 4.2zM5 9.3l6.5 3.6v7.3L5 16.5V9.3zm14 0v7.2l-6.5 3.7v-7.3L19 9.3z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2c-3.5 0-6 2.2-6 5.5 0 1.8.9 3.4 2.3 4.4-.3.9-.5 1.9-.5 2.9 0 3.3 2.5 5.2 6 5.2h1.4c3.5 0 6-1.9 6-5.2 0-1-.2-2-.5-2.9 1.4-1 2.3-2.6 2.3-4.4C18 4.2 15.5 2 12 2zm0 2c2.4 0 4 1.4 4 3.5S14.4 11 12 11 8 9.6 8 7.5 9.6 4 12 4z" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2s-1 4.5-1 8.5c0 2.5.4 4.5 1 5.5.6-1 1-3 1-5.5C13 6.5 12 2 12 2zm0 18c-3.5-1.5-6-4.5-6-8.5 0-2 .5-3.8 1.3-5.3C9.8 8.8 12 11.5 12 14c0-2.5 2.2-5.2 4.7-6.8.8 1.5 1.3 3.3 1.3 5.3 0 4-2.5 7-6 8.5z" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="m12 2 10 18H2L12 2z" />
        </svg>
      );
    case "git":
    case "github-actions":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5 5.5.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-10h4c2.2 0 4-1.8 4-4S14.2 6 12 6H8v8zm0-10h4a4 4 0 1 1 0 8H8V4zm8 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
        </svg>
      );
    case "openai":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2a7 7 0 0 0-6.2 10.2 7 7 0 0 0-.8 3.3c0 3.9 3.1 7 7 7a7 7 0 0 0 3.3-.8A7 7 0 1 0 12 2zm0 2a5 5 0 0 1 4.1 7.8l-1.2-.7A3.5 3.5 0 1 0 12 6.5c.6 0 1.2.1 1.7.4l.7-1.2A4.9 4.9 0 0 0 12 4z" />
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="m17.5 2-5 4.5L9.5 2 2 9.5v5L9.5 22l3-2.7 5 4.5L22 14.5v-5L17.5 2zM12 15.5 7.5 19V5l4.5 3.5v7z" />
        </svg>
      );
    case "framer-motion":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      );
    case "html-css":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M4 3h16l-1.5 17-6.5 2-6.5-2L4 3zm3.2 4 .3 3h7.8l-.2 2.2H8l.5 5.5 3.5 1 3.5-1 .2-2.3h-2.3l-.1 1-1.1.3-1.1-.3-.1-1.5H7.2L8 7h8.8l-.3-3H7.2z" />
        </svg>
      );
    case "rest":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" />
        </svg>
      );
    case "responsive":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 6h8v2H8v-2z" />
        </svg>
      );
    default:
      return <FallbackIcon name={id} className={className} />;
  }
}

export function getSkillIconLabel(id: string, name: string) {
  return `${name} icon`;
}
