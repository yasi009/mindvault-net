-- Create table for tool download signups
CREATE TABLE public.tool_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  tool_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tool_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup)
CREATE POLICY "Anyone can sign up for tools" 
ON public.tool_signups 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster email lookups
CREATE INDEX idx_tool_signups_email ON public.tool_signups(email);
CREATE INDEX idx_tool_signups_created_at ON public.tool_signups(created_at DESC);