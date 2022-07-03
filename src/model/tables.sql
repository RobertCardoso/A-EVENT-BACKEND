create table events (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    eventName VARCHAR(150) NOT NULL,
    address VARCHAR(100) NOT NULL,
    price VARCHAR(100) NOT NULL,
    eventmusic VARCHAR(50),
    eventdate VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
    userId INT NOT NULL, 
    FOREIGN KEY (userId) REFERENCES users(id)
)

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(100) not null UNIQUE,
    pw_hash VARCHAR(1000) NOT NULL
);

-- when a user registers
insert into users(email, pw_hash) values (? , ?)

select pw_hash from users where email = ?

-- get summary of all the events
select * from events

-- get details from a event by id
select id, eventName, address, price, eventmusic, eventdate, description from events where id = ?



