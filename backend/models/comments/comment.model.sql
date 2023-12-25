CREATE TABLE IF NOT EXISTS  comments (
  comment_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  post_id INTEGER REFERENCES posts(post_id),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
