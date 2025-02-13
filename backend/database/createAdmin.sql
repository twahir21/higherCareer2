CREATE TABLE admin(
id serial primary key,
username varchar(50) not null,
role varchar(50),
pswd varchar(255) not null
)