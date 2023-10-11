CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);