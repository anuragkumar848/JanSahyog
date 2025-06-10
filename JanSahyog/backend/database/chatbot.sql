-- Table to store chatbot sessions (optional, for grouping messages)
CREATE TABLE chatbot_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP
);

-- Table to store each message exchanged in the chat
CREATE TABLE chatbot_messages (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES chatbot_sessions(id) ON DELETE SET NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    sender VARCHAR(20) NOT NULL, -- 'user' or 'bot'
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store Aadhaar verifications
CREATE TABLE aadhaar_verifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    aadhaar_number VARCHAR(12) NOT NULL,
    verified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMP
);

-- Table to store DigiLocker document attachments
CREATE TABLE digilocker_docs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    doc_name VARCHAR(100) NOT NULL,
    attached_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store scheme searches
CREATE TABLE scheme_searches (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    occupation VARCHAR(50),
    state VARCHAR(50),
    searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);