-- Add preferred_date column to consultation_bookings table
ALTER TABLE public.consultation_bookings 
ADD COLUMN preferred_date TEXT;

COMMENT ON COLUMN public.consultation_bookings.preferred_date IS 'User-specified preferred day/time for their 15-minute consultation';