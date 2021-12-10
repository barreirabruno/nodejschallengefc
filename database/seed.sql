CREATE TABLE IF NOT EXISTS people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) 
VALUES("Beyonce"),
    ("Lady Gaga"),
    ("Amy Winehouse"),
    ("Dua Lipa"),
    ("JAY-Z"),
    ("Dr. Dre"),
    ("Snoop Dog"),
    ("Gnarls Barkles"),
    ("Bruno mars");