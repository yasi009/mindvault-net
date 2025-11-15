import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/work-with-us", label: "Work With Us" },
    { path: "/about-us", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-foreground tracking-tight">
            TheMindVault
          </Link>
          
          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary px-2 py-1",
                        location.pathname === link.path
                          ? "text-primary font-bold"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link to="/services" onClick={() => setOpen(false)}>
                    <Button className="w-full mt-4">
                      Get Life OS
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.path
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/services">
                <Button size="sm" className="ml-2 text-sm px-4 h-9">
                  Get Life OS
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
