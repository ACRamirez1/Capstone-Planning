DROP TABLE IF EXISTS regUser;

create table regUser (
id int AUTO_INCREMENT PRIMARY KEY,
name varchar(250) not null, 
email varchar(250) not null unique,
password varchar(1000) not null 
)

insert into regUser VALUES (
    null,
    "test",
    "test@test.com",
    "test123"
)