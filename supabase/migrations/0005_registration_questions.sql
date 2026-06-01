-- Luma registration questions (custom columns, W onward): the column
-- title is the question, the cell is each participant's answer.

create table registration_question (
  id uuid primary key default gen_random_uuid(),
  own_event_id uuid not null references own_event (id) on delete cascade,
  text text not null,
  unique (own_event_id, text)
);

create table participant_answer (
  id uuid primary key default gen_random_uuid(),
  event_participant_id uuid not null
    references event_participant (id) on delete cascade,
  registration_question_id uuid not null
    references registration_question (id) on delete cascade,
  answer text,
  unique (event_participant_id, registration_question_id)
);

create index registration_question_event_idx
  on registration_question (own_event_id);
create index participant_answer_participant_idx
  on participant_answer (event_participant_id);
