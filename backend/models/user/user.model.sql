CREATE TABLE IF NOT EXISTS "users" (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    username VARCHAR(45),
    email VARCHAR(100),
    password VARCHAR(255),
    user_role VARCHAR(20),
    profile_pic BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reset_token VARCHAR(255),
    reset_token_epx TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
