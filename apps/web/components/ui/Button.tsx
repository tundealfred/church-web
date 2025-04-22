// apps/web/src/components/ui/Button.tsx
"use client";
import { Button as BaseButton } from "@repo/ui/button";

export function Button({
  children,
  className = "",
  ...props
}: React.ComponentProps<typeof BaseButton>) {
  return (
    <BaseButton className={`${className}`} {...props}>
      {children}
    </BaseButton>
  );
}
