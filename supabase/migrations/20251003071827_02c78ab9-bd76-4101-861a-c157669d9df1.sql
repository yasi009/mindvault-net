-- Create consultation_bookings table
CREATE TABLE public.consultation_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  purpose TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings
CREATE POLICY "Anyone can book consultations"
ON public.consultation_bookings
FOR INSERT
WITH CHECK (true);

-- Create indexes
CREATE INDEX idx_consultation_bookings_email ON public.consultation_bookings(email);
CREATE INDEX idx_consultation_bookings_created_at ON public.consultation_bookings(created_at);