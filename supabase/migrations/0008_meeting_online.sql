-- Whether a meeting was held online (Google Meet / conferencing).

alter table meeting add column online boolean not null default false;
