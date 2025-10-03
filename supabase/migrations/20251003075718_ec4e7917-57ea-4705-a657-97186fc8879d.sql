-- Add explicit deny-all SELECT policies to protect customer contact information
-- This ensures data can only be viewed by site administrators through the backend panel

-- Block all SELECT access to consultation bookings
CREATE POLICY "Deny all SELECT access to consultation bookings"
ON public.consultation_bookings
FOR SELECT
USING (false);

-- Block all SELECT access to tool signups
CREATE POLICY "Deny all SELECT access to tool signups"
ON public.tool_signups
FOR SELECT
USING (false);

-- Note: INSERT policies remain unchanged - public booking/signup forms will continue to work
-- Site administrators can view all submissions through the Lovable Cloud backend panel