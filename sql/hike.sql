DROP view if exists sugg_hikes;
DROP TABLE IF EXISTS equipment_for_hike, selected_hikes, suitable_hikes, hiking_places, hiketype_places, nutrition, transfer, hikes, wishes, necessary_equipment, equipment, places, type_hike;

CREATE TABLE type_hike
(
  type_id   serial PRIMARY KEY,
  type_hike text NOT NULL
);
INSERT INTO type_hike VALUES (default, 'mountain');
INSERT INTO type_hike VALUES (default, 'water');
INSERT INTO type_hike VALUES (default, 'ski');
INSERT INTO type_hike VALUES (default, 'pedestrian');

CREATE TABLE places
(
  place_id serial PRIMARY KEY,
  country  text NOT NULL,
  name     text NOT NULL
);
INSERT INTO places VALUES (default, 'Russia', 'Arkhys, Caucasus');
INSERT INTO places VALUES (default, 'Russia', 'Elbrus');
INSERT INTO places VALUES (default, 'Russia', 'Shavlinsky lakes, Altai');
INSERT INTO places VALUES (default, 'Russia', 'Crimea');
INSERT INTO places VALUES (default, 'Kyrgistan', 'Tian-Shan');
INSERT INTO places VALUES (default, 'Russia','the Southern Urals');
INSERT INTO places VALUES (default, 'Russia','the Vladimir Region');
INSERT INTO places VALUES (default, 'Russia','Karelia');
INSERT INTO places VALUES (default, 'Russia', 'Akhtuba');
INSERT INTO places VALUES (default, 'USA', 'Brevard, North Carolina');
INSERT INTO places VALUES (default,'Austria', 'Tyro');
INSERT INTO places VALUES (default,'Nepal', 'Mustang');
INSERT INTO places VALUES (default, 'France', 'Alpine mountain range');
INSERT INTO places VALUES (default, 'Russia', 'Khibini');
INSERT INTO places VALUES (default, 'Russia', 'Ural, Dyatlov pass');
INSERT INTO places VALUES (default, 'Russia', 'Ural, The Manpupuner');
INSERT INTO places VALUES (default, 'Russia', 'ADYGEA');
INSERT INTO places VALUES (default, 'Russia','Kamchatka');


CREATE TABLE transfer
(
  id       serial PRIMARY KEY,
  place_id bigint references places ON DELETE CASCADE,
  cost_rub bigint NOT NULL
);
INSERT INTO transfer VALUES (default, 1, 9000);
INSERT INTO transfer VALUES (default, 2, 11000);
INSERT INTO transfer VALUES (default, 3, 12000);
INSERT INTO transfer VALUES (default, 4, 0);
INSERT INTO transfer VALUES (default, 5, 7000);
INSERT INTO transfer VALUES (default, 6, 17000);
INSERT INTO transfer VALUES (default, 7, 12000);
INSERT INTO transfer VALUES (default, 8, 10000);
INSERT INTO transfer VALUES (default, 9, 8000);
INSERT INTO transfer VALUES (default, 10, 0);
INSERT INTO transfer VALUES (default, 11, 9000);
INSERT INTO transfer VALUES (default, 12, 11000);
INSERT INTO transfer VALUES (default, 13, 7000);
INSERT INTO transfer VALUES (default, 14, 6000);
INSERT INTO transfer VALUES (default, 15, 10000);
INSERT INTO transfer VALUES (default, 16, 0);
INSERT INTO transfer VALUES (default, 17, 8000);
INSERT INTO transfer VALUES (default, 18, 11000);

CREATE TABLE hikes
(
  hike_id       serial PRIMARY KEY,
  type_id       bigint REFERENCES type_hike ON DELETE CASCADE,
  category      bigint CHECK (category > 0 AND category < 5),
  com_ncom      text   NOT NULL,
  month        text   NOT NULL,
  number_people bigint NOT NULL check(number_people<11),
  number_days   bigint not null,
  cost_rub      bigint
);
INSERT INTO hikes VALUES (default, 1, 1, 'not commercial', 'august', 5, 10);
INSERT INTO hikes VALUES (default, 1, 1, 'not commercial', 'june', 4, 10);
INSERT INTO hikes VALUES (default, 1, 1, 'not commercial', 'july', 6, 10);
INSERT INTO hikes VALUES (default, 1, 1, 'commercial', 'august', 6, 8, 30000);
INSERT INTO hikes VALUES (default, 1, 1, 'commercial', 'july', 4, 9, 35000);
INSERT INTO hikes VALUES (default, 1, 2,  'commercial', 'june', 2, 10, 50000);
INSERT INTO hikes VALUES (default, 1, 2,  'commercial', 'july', 3, 11, 50000);
INSERT INTO hikes VALUES (default, 1, 2,  'not commercial', 'june', 2, 10);
INSERT INTO hikes VALUES (default, 1, 3, 'not commercial', 'july', 6, 10);
INSERT INTO hikes VALUES (default, 1, 3, 'not commercial', 'june', 3, 9);
INSERT INTO hikes VALUES (default, 1, 3, 'not commercial', 'august', 4, 11);
INSERT INTO hikes VALUES (default, 1, 3, 'commercial', 'july', 3, 10, 50000);
INSERT INTO hikes VALUES (default, 1, 3, 'commercial', 'september', 3, 10, 55000);
INSERT INTO hikes VALUES (default, 2, 1, 'commercial', 'august', 8, 8, 30000);
INSERT INTO hikes VALUES (default, 2, 1, 'not commercial', 'august', 2, 7);
INSERT INTO hikes VALUES (default, 2, 1, 'not commercial', 'june', 3, 8);
INSERT INTO hikes VALUES (default, 2, 1, 'not commercial', 'july', 4, 7);
INSERT INTO hikes VALUES (default, 2, 2, 'not commercial', 'august', 2, 7);
INSERT INTO hikes VALUES (default, 2, 2, 'not commercial', 'june', 4, 10);
INSERT INTO hikes VALUES (default, 2, 3, 'not commercial', 'september', 5, 10);
INSERT INTO hikes VALUES (default, 2, 3, 'not commercial', 'august', 6, 9);
INSERT INTO hikes VALUES (default, 3, 1, 'not commercial', 'january', 7, 10);
INSERT INTO hikes VALUES (default, 3, 1, 'not commercial', 'february', 5, 8);
INSERT INTO hikes VALUES (default, 3, 1, 'commercial', 'january', 7, 10, 40000);
INSERT INTO hikes VALUES (default, 3, 1, 'commercial', 'february', 5, 8, 37000);
INSERT INTO hikes VALUES (default, 3, 2, 'not commercial', 'january', 7, 9);
INSERT INTO hikes VALUES (default, 3, 2, 'not commercial', 'february', 5, 8);
INSERT INTO hikes VALUES (default, 3, 3, 'not commercial', 'january', 2, 7);
INSERT INTO hikes VALUES (default, 3, 3, 'not commercial', 'february', 5, 8);
INSERT INTO hikes VALUES (default, 4, 2, 'not commercial', 'june', 6, 10);
INSERT INTO hikes VALUES (default, 4, 1, 'not commercial', 'august', 5, 11);
INSERT INTO hikes VALUES (default, 4, 1, 'not commercial', 'june', 4, 12);
INSERT INTO hikes VALUES (default, 4, 1, 'not commercial', 'july', 6, 8);
INSERT INTO hikes VALUES (default, 4, 1, 'commercial', 'august', 6, 7, 30000);
INSERT INTO hikes VALUES (default, 4, 1, 'commercial', 'july', 4, 9, 35000);
INSERT INTO hikes VALUES (default, 4, 2,  'commercial', 'june', 2, 10, 50000);
INSERT INTO hikes VALUES (default, 4, 2,  'commercial', 'july', 3, 11, 50000);


CREATE TABLE nutrition
(
  nutrition_id serial PRIMARY KEY,
  type_id      bigint REFERENCES type_hike ON DELETE CASCADE,
  category     bigint CHECK ( category > 0 AND category < 5),
  cost_day_rub bigint NOT NULL
);
INSERT INTO nutrition VALUES (default, 4, 1, 200);
INSERT INTO nutrition VALUES (default, 4, 2, 220);
INSERT INTO nutrition VALUES (default, 1, 1, 250);
INSERT INTO nutrition VALUES (default, 2, 1, 300);
INSERT INTO nutrition VALUES (default, 3, 1, 340);
INSERT INTO nutrition VALUES (default, 1, 2, 300);

CREATE TABLE hiking_places
(
  hike_id  bigint REFERENCES hikes ON DELETE CASCADE,
  place_id bigint REFERENCES places ON DELETE CASCADE,
  CONSTRAINT hiking_places_id PRIMARY KEY (hike_id, place_id)
);
INSERT INTO hiking_places VALUES (1, 1);
INSERT INTO hiking_places VALUES (1, 3);
INSERT INTO hiking_places VALUES (2, 3);
INSERT INTO hiking_places VALUES (5, 4);
INSERT INTO hiking_places VALUES (3, 5);

CREATE TABLE hiketype_places
(
  type_id  bigint REFERENCES hikes ON DELETE CASCADE,
  place_id bigint REFERENCES places ON DELETE CASCADE,
  CONSTRAINT hiketype_places_id PRIMARY KEY (type_id, place_id)
);

INSERT INTO hiketype_places values (1, 1);
INSERT INTO hiketype_places values (1, 2);
INSERT INTO hiketype_places values (1, 3);
INSERT INTO hiketype_places values (1, 4);
INSERT INTO hiketype_places values (1, 5);
INSERT INTO hiketype_places values (1, 10);
INSERT INTO hiketype_places values (1, 11);
INSERT INTO hiketype_places values (1, 12);
INSERT INTO hiketype_places values (1, 13);
INSERT INTO hiketype_places values (2, 6);
INSERT INTO hiketype_places values (2,7);
INSERT INTO hiketype_places values (2,8);
INSERT INTO hiketype_places values (2,9);
INSERT INTO hiketype_places values (3,5);
INSERT INTO hiketype_places values (3,14);
INSERT INTO hiketype_places values (3,15);
INSERT INTO hiketype_places values (3,16);
INSERT INTO hiketype_places values (4, 4);
INSERT INTO hiketype_places values (4, 3);
INSERT INTO hiketype_places values (4, 17);
INSERT INTO hiketype_places values (4, 18);



CREATE TABLE wishes
(
  wish_id        serial PRIMARY KEY,
  type_id        bigint REFERENCES type_hike ON DELETE CASCADE,
  category       bigint CHECK (category >= 0 AND category < 5),
  com_ncom       text NOT NULL,
  month         text
);

CREATE TABLE equipment
(
  id             serial PRIMARY KEY,
  type_equipment text   NOT NULL,
  cost_day_rub   bigint NOT NULL
);
INSERT INTO equipment VALUES (default, 'tent', 100);
INSERT INTO equipment VALUES (default, 'sleeping_bag', 150);
INSERT INTO equipment VALUES (default, 'mat', 70);
INSERT INTO equipment VALUES (default, 'strapping', 150);
INSERT INTO equipment VALUES (default, 'skiing', 100);
INSERT INTO equipment VALUES (default, 'trekking poles', 200);
INSERT INTO equipment VALUES (default, 'kayak', 400);
INSERT INTO equipment VALUES (default, 'hoba', 50);
INSERT INTO equipment VALUES (default, 'ropes', 100);
INSERT INTO equipment VALUES (default, 'ice axe', 100);
INSERT INTO equipment VALUES (default, 'hemlet', 100);
INSERT INTO equipment VALUES (default, 'hermo bag', 80);


CREATE TABLE necessary_equipment
(
  participant_id bigint REFERENCES participants ON DELETE CASCADE,
  equipment_id   bigint REFERENCES equipment ON DELETE CASCADE,
  CONSTRAINT necessary_equipment_id PRIMARY KEY (participant_id, equipment_id)
);
INSERT INTO necessary_equipment VALUES (1, 2);
INSERT INTO necessary_equipment VALUES (1, 7);
INSERT INTO necessary_equipment VALUES (2, 1);
INSERT INTO necessary_equipment VALUES (3, 1);
INSERT INTO necessary_equipment VALUES (3, 7);
INSERT INTO necessary_equipment VALUES (4, 6);


CREATE table equipment_for_hike
(
  equipment_id   bigint REFERENCES equipment ON DELETE CASCADE,
  type_id  bigint REFERENCES type_hike ON DELETE CASCADE,
  category bigint CHECK ( category > 0 AND category < 5),
  CONSTRAINT equipment_for_hike_id PRIMARY KEY (equipment_id, type_id, category)
);
INSERT INTO equipment_for_hike values (1,1,1 );
INSERT INTO equipment_for_hike values (1,1,2 );
INSERT INTO equipment_for_hike values (1,1,3 );
INSERT INTO equipment_for_hike values (1,1,4 );
INSERT INTO equipment_for_hike values (1,2,1 );
INSERT INTO equipment_for_hike values (1,2,2 );
INSERT INTO equipment_for_hike values (1,2,3 );
INSERT INTO equipment_for_hike values (1,2,4 );
INSERT INTO equipment_for_hike values (1,3,1 );
INSERT INTO equipment_for_hike values (1,3,2 );
INSERT INTO equipment_for_hike values (1,3,3 );
INSERT INTO equipment_for_hike values (1,3,4 );
INSERT INTO equipment_for_hike values (1,4,1 );
INSERT INTO equipment_for_hike values (1,4,2 );
INSERT INTO equipment_for_hike values (1,4,3 );
INSERT INTO equipment_for_hike values (1,4,4 );
INSERT INTO equipment_for_hike values (2,1,1 );
INSERT INTO equipment_for_hike values (2,1,2 );
INSERT INTO equipment_for_hike values (2,1,3 );
INSERT INTO equipment_for_hike values (2,1,4 );
INSERT INTO equipment_for_hike values (2,2,1 );
INSERT INTO equipment_for_hike values (2,2,2 );
INSERT INTO equipment_for_hike values (2,2,3 );
INSERT INTO equipment_for_hike values (2,2,4 );
INSERT INTO equipment_for_hike values (2,3,1 );
INSERT INTO equipment_for_hike values (2,3,2 );
INSERT INTO equipment_for_hike values (2,3,3 );
INSERT INTO equipment_for_hike values (2,3,4 );
INSERT INTO equipment_for_hike values (2,4,1 );
INSERT INTO equipment_for_hike values (2,4,2 );
INSERT INTO equipment_for_hike values (2,4,3 );
INSERT INTO equipment_for_hike values (2,4,4 );
INSERT INTO equipment_for_hike values (3,1,1 );
INSERT INTO equipment_for_hike values (3,1,2 );
INSERT INTO equipment_for_hike values (3,1,3 );
INSERT INTO equipment_for_hike values (3,1,4 );
INSERT INTO equipment_for_hike values (3,2,1 );
INSERT INTO equipment_for_hike values (3,2,2 );
INSERT INTO equipment_for_hike values (3,2,3 );
INSERT INTO equipment_for_hike values (3,2,4 );
INSERT INTO equipment_for_hike values (3,3,1 );
INSERT INTO equipment_for_hike values (3,3,2 );
INSERT INTO equipment_for_hike values (3,3,3 );
INSERT INTO equipment_for_hike values (3,3,4 );
INSERT INTO equipment_for_hike values (3,4,1 );
INSERT INTO equipment_for_hike values (3,4,2 );
INSERT INTO equipment_for_hike values (3,4,3 );
INSERT INTO equipment_for_hike values (3,4,4 );
INSERT INTO equipment_for_hike values (4,1,2 );
INSERT INTO equipment_for_hike values (4,1,3 );
INSERT INTO equipment_for_hike values (4,1,4 );
INSERT INTO equipment_for_hike values (5,3,1 );
INSERT INTO equipment_for_hike values (5,3,2 );
INSERT INTO equipment_for_hike values (5,3,3 );
INSERT INTO equipment_for_hike values (5,3,4 );
INSERT INTO equipment_for_hike values (6,1,1 );
INSERT INTO equipment_for_hike values (6,1,2 );
INSERT INTO equipment_for_hike values (6,1,3 );
INSERT INTO equipment_for_hike values (6,1,4 );
INSERT INTO equipment_for_hike values (6,4,1 );
INSERT INTO equipment_for_hike values (6,4,2 );
INSERT INTO equipment_for_hike values (6,4,3 );
INSERT INTO equipment_for_hike values (6,4,4 );
INSERT INTO equipment_for_hike values (7,2,1 );
INSERT INTO equipment_for_hike values (7,2,2 );
INSERT INTO equipment_for_hike values (7,2,3 );
INSERT INTO equipment_for_hike values (7,2,4 );
INSERT INTO equipment_for_hike values (8,1,1 );
INSERT INTO equipment_for_hike values (8,1,2 );
INSERT INTO equipment_for_hike values (8,1,3 );
INSERT INTO equipment_for_hike values (8,1,4 );
INSERT INTO equipment_for_hike values (8,2,1 );
INSERT INTO equipment_for_hike values (8,2,2 );
INSERT INTO equipment_for_hike values (8,2,3 );
INSERT INTO equipment_for_hike values (8,2,4 );
INSERT INTO equipment_for_hike values (8,3,1 );
INSERT INTO equipment_for_hike values (8,3,2 );
INSERT INTO equipment_for_hike values (8,3,3 );
INSERT INTO equipment_for_hike values (8,3,4 );
INSERT INTO equipment_for_hike values (8,4,1 );
INSERT INTO equipment_for_hike values (8,4,2 );
INSERT INTO equipment_for_hike values (8,4,3 );
INSERT INTO equipment_for_hike values (8,4,4 );
INSERT INTO equipment_for_hike values (9,1,1 );
INSERT INTO equipment_for_hike values (9,1,2 );
INSERT INTO equipment_for_hike values (9,1,3 );
INSERT INTO equipment_for_hike values (9,1,4 );
INSERT INTO equipment_for_hike values (10,1,1 );
INSERT INTO equipment_for_hike values (10,1,2 );
INSERT INTO equipment_for_hike values (10,1,3 );
INSERT INTO equipment_for_hike values (10,1,4 );
INSERT INTO equipment_for_hike values (10,3,2 );
INSERT INTO equipment_for_hike values (10,3,3 );
INSERT INTO equipment_for_hike values (10,3,4 );
INSERT INTO equipment_for_hike values (11,1,1 );
INSERT INTO equipment_for_hike values (11,1,2 );
INSERT INTO equipment_for_hike values (11,1,3 );
INSERT INTO equipment_for_hike values (11,1,4 );
INSERT INTO equipment_for_hike values (11,2,1 );
INSERT INTO equipment_for_hike values (11,2,2 );
INSERT INTO equipment_for_hike values (11,2,3 );
INSERT INTO equipment_for_hike values (11,2,4 );
INSERT INTO equipment_for_hike values (11,3,1 );
INSERT INTO equipment_for_hike values (11,3,2 );
INSERT INTO equipment_for_hike values (11,3,3 );
INSERT INTO equipment_for_hike values (11,3,4 );
INSERT INTO equipment_for_hike values (12,2,1 );
INSERT INTO equipment_for_hike values (12,2,2 );
INSERT INTO equipment_for_hike values (12,2,3 );
INSERT INTO equipment_for_hike values (12,2,4 );

--CREATE TABLE selected_hikes
--(
--  participant_id bigint REFERENCES participants ON DELETE CASCADE,
--  hike_id        bigint REFERENCES hikes ON DELETE CASCADE,
--  CONSTRAINT selected_hike_id PRIMARY KEY (participant_id, hike_id)
--);

--INSERT INTO selected_hikes VALUES (1, 4);
--INSERT INTO selected_hikes VALUES (3, 2);
--INSERT INTO selected_hikes VALUES (5, 5);
--INSERT INTO selected_hikes VALUES (2, 4);

CREATE view sugg_hikes as SELECT row_number() over () as num, type_hike.type_hike, category, com_ncom, number_days, month, places.name, places.country, hikes.cost_rub from hiketype_places right join hikes on hiketype_places.type_id = hikes.type_id right join type_hike on hikes.type_id = type_hike.type_id join places on hiketype_places.place_id=places.place_id;

CREATE TABLE suitable_hikes
(
  wish_id bigint REFERENCES wishes ON DELETE CASCADE,
  hike_id bigint not null,
  CONSTRAINT suitable_hike_id PRIMARY KEY (wish_id, hike_id)
);



