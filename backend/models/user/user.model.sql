CREATE TABLE IF NOT EXISTS "users" (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(45),
    email VARCHAR(100),
    password VARCHAR(14),
    user_role VARCHAR(20),
    profile_pic BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
