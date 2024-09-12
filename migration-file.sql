-- Migrations will appear here as you chat with AI

create table artists (
  id bigint primary key generated always as identity,
  name text not null,
  genre text,
  country text
);

create table venues (
  id bigint primary key generated always as identity,
  name text not null,
  location text not null,
  capacity int not null
);

create table concerts (
  id bigint primary key generated always as identity,
  artist_id bigint references artists (id),
  venue_id bigint references venues (id),
  date date not null,
  start_time time not null,
  end_time time not null
);

create table tickets (
  id bigint primary key generated always as identity,
  concert_id bigint references concerts (id),
  price numeric(10, 2) not null,
  seat_number text,
  purchaser_name text
);

create table attendees (
  id bigint primary key generated always as identity,
  name text not null,
  email text unique,
  phone text,
  ticket_id bigint references tickets (id)
);

-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing

-- Inserting dummy data into the artists table
INSERT INTO
  public.artists (NAME, genre, country)
VALUES
  ('The Rolling Stones', 'Rock', 'United Kingdom'),
  ('Beyoncé', 'Pop', 'United States'),
  ('BTS', 'K-Pop', 'South Korea'),
  ('Adele', 'Pop', 'United Kingdom'),
  ('Shakira', 'Pop', 'Colombia');

-- Inserting dummy data into the attendees table
INSERT INTO
  public.attendees (NAME, email, phone, ticket_id)
VALUES
  (
    'John Doe',
    'john.doe@example.com',
    '123-456-7890',
    NULL
  ),
  (
    'Jane Smith',
    'jane.smith@example.com',
    '098-765-4321',
    NULL
  ),
  (
    'Alice Johnson',
    'alice.johnson@example.com',
    '555-123-4567',
    NULL
  ),
  (
    'Bob Brown',
    'bob.brown@example.com',
    '555-987-6543',
    NULL
  ),
  (
    'Charlie Davis',
    'charlie.davis@example.com',
    '555-555-5555',
    NULL
  );

-- Inserting dummy data into the venues table
INSERT INTO
  public.venues (NAME, LOCATION, capacity)
VALUES
  ('Madison Square Garden', 'New York, NY', 20000),
  ('The O2 Arena', 'London, UK', 20000),
  ('Sydney Opera House', 'Sydney, Australia', 1500),
  ('Red Rocks Amphitheatre', 'Morrison, CO', 9500),
  ('Tokyo Dome', 'Tokyo, Japan', 55000);

-- Inserting dummy data into the concerts table
INSERT INTO
  public.concerts (artist_id, venue_id, date, start_time, end_time)
VALUES
  (1, 1, '2023-12-01', '20:00:00', '22:00:00'),
  (2, 2, '2023-12-05', '19:30:00', '21:30:00'),
  (3, 3, '2023-12-10', '18:00:00', '20:00:00'),
  (4, 4, '2023-12-15', '21:00:00', '23:00:00'),
  (5, 5, '2023-12-20', '19:00:00', '21:00:00');

-- Inserting dummy data into the tickets table
INSERT INTO
  public.tickets (concert_id, price, seat_number, purchaser_name)
VALUES
  (1, 150.00, 'A1', 'John Doe'),
  (2, 120.00, 'B2', 'Jane Smith'),
  (3, 100.00, 'C3', 'Alice Johnson'),
  (4, 200.00, 'D4', 'Bob Brown'),
  (5, 80.00, 'E5', 'Charlie Davis');