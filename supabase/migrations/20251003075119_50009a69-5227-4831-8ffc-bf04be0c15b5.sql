-- Remove the overly permissive SELECT policy
-- Customer bookings should only be viewable by site administrators through the backend
DROP POLICY IF EXISTS "Only authenticated users can view consultation bookings" ON public.consultation_bookings;

-- Note: The consultation form will continue to work (INSERT policy remains)
-- Site owners can view bookings through the Lovable Cloud backend panel