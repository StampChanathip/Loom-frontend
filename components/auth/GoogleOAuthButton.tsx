"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GoogleOAuthButtonProps {
  className?: string;
}

export default function GoogleOAuthButton({
  className,
}: GoogleOAuthButtonProps) {
  const handleGoogleLogin = () => {};

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleLogin}
      className={`w-full ${className}`}
    >
      <Image
        src="/svg/google-icon-logo-svgrepo-com.svg"
        alt="Google"
        width={16}
        height={16}
        className="mr-2"
      />
      Continue with Google
    </Button>
  );
}
