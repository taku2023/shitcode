\c postgres;

create table if not exists posts(
  id serial,
  user_id varchar(32) ,
  title text not null,
  summary text not null,
  files_s3_url text[],
  primary key (id, user_id)
);

create table if not exists tags(
  id unique
)