"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PROFILE_SRC = "/images/profile.jpg";

interface ProfileImageProps {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "default" | "hero";
  initials?: string;
}

function ProfileFallback({
  className,
  initials = "ET",
  variant = "default",
}: {
  className?: string;
  initials?: string;
  variant?: "default" | "hero";
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-surface",
        variant === "default" &&
          "flex-col gap-4 border border-dashed border-border px-6 text-center",
        className
      )}
      role="img"
      aria-label={altFallbackLabel(initials)}
    >
      <span
        className={cn(
          "font-display tracking-tight text-muted/35",
          variant === "hero" ? "text-6xl xl:text-7xl" : "text-3xl"
        )}
        aria-hidden="true"
      >
        {initials}
      </span>
      {variant === "default" ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Add profile photo
        </p>
      ) : null}
    </div>
  );
}

function altFallbackLabel(initials: string) {
  return `Profile photo placeholder showing initials ${initials}`;
}

export function ProfileImage({
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 80vw, 320px",
  variant = "default",
  initials = "ET",
}: ProfileImageProps) {
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setHasProfile(true);
    img.onerror = () => setHasProfile(false);
    img.src = PROFILE_SRC;
  }, []);

  return (
    <div className={cn("relative h-full w-full", className)}>
      {hasProfile === true ? (
        <Image
          src={PROFILE_SRC}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover object-top", imageClassName)}
          sizes={sizes}
        />
      ) : hasProfile === false ? (
        <ProfileFallback
          className="absolute inset-0"
          initials={initials}
          variant={variant}
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-surface" aria-hidden="true" />
      )}
    </div>
  );
}
