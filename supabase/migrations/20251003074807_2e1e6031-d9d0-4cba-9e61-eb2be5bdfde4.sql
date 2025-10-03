-- Add SELECT policy to protect customer contact information
-- Only authenticated users can view consultation bookings
CREATE POLICY "Only authenticated users can view consultation bookings"
ON public.consultation_bookings
FOR SELECT
TO authenticated
USING (true);