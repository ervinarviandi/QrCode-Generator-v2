"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
export function Toast() {
  const { toast } = useToast();

  return (
    <Button
      className="dark:border-[#121212]"
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      <HamburgerMenuIcon />
    </Button>
  );
}
