CREATE TABLE IF NOT EXISTS posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    post_img BYTEA,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);
