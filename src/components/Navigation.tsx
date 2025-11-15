import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  
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
          
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs sm:text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/services">
              <Button size="sm" className="ml-1 sm:ml-2 text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-9">
                Get Life OS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
