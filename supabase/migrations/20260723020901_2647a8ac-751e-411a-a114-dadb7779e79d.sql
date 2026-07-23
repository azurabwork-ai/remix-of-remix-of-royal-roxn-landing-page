DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
CREATE POLICY "Anyone can submit a lead" ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 120
    AND length(email) BETWEEN 3 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(phone) BETWEEN 5 AND 40
    AND length(city) BETWEEN 1 AND 120
    AND length(brokerage) BETWEEN 1 AND 200
  );