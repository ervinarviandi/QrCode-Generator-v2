"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export function Toaster() {
  const { toasts } = useToast();

  const Judul = "Thank you for using the QR code generator";
  const Desc = "Click the Link to see my latest project";

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{Judul}</ToastTitle>}
              {description && (
                <ToastDescription className="flex items-center gap-x-2">
                  {Desc}
                  <Link href="https://github.com/ervinarviandi">
                    <GitHubLogoIcon />
                  </Link>
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
