"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const PROFILE_SRC = "/images/profile.jpg";

interface ProfileImageProps {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

function ProfilePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed border-border bg-surface px-6 text-center",
        className
      )}
      role="img"
      aria-label="Add Your Profile Photo"
    >
      <Camera className="h-8 w-8 text-muted" strokeWidth={1.5} aria-hidden="true" />
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Add Your Profile Photo
      </p>
    </div>
  );
}

export function ProfileImage({
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 80vw, 33vw",
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
        <ProfilePlaceholder className="absolute inset-0" />
      ) : (
        <div className="absolute inset-0 bg-surface" aria-hidden="true" />
      )}
    </div>
  );
}
