CREATE TABLE IF NOT EXISTS likes (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    post_id INTEGER REFERENCES posts(post_id) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);