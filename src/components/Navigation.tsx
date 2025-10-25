import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/life-os", label: "Product", highlight: true },
    { path: "/method", label: "How It Works" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-foreground tracking-tight">
            TheMindVault
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  link.highlight
                    ? "bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/90"
                    : location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
