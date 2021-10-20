DROP function if exists create_hike(type_id bigint, category bigint, com_ncom text, month text, number_people bigint, number_days bigint, cost_rub bigint);
--добавить поход
CREATE OR REPLACE FUNCTION create_hike(vtype_id bigint, vcategory bigint,
                                       vcom_ncom text, vmonth text, vnumber_people bigint,
                                       vnumber_days bigint, vcost_rub bigint) returns BIGINT as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO hikes(type_id, category,
                    com_ncom, month, number_people,
                    number_days, cost_rub)
  VALUES (vtype_id, vcategory, vcom_ncom, vmonth, vnumber_people, vnumber_days, vcost_rub) returning hike_id into ret;
  return ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP function if exists create_animal(type_pet text);
--добавить вид животного
CREATE OR REPLACE FUNCTION create_animal(vtype_pet text) RETURNS bigint
  STRICT
as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO pets(type_pet) VALUES (vtype_pet) returning pet_id into ret;
  RETURN ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP function if exists create_participant(FCs text);
--добавить участника
CREATE OR REPLACE FUNCTION create_participant(vFCs text) RETURNS bigint
as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO participants(FCs) VALUES (vFCs) returning id into ret;
  RETURN ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP function if exists create_equipment(type_equipment text, cost_day_rub bigint);
--добавить снаряжение
CREATE OR REPLACE FUNCTION create_equipment(vtype_equipment text, vcost_day_rub bigint) RETURNS bigint
as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO equipment(type_equipment, cost_day_rub) VALUES (vtype_equipment, vcost_day_rub) returning id into ret;
  RETURN ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP function if exists create_place(country text, name text);
--добавить место
CREATE OR REPLACE FUNCTION create_place(vcountry text, vname text) RETURNS bigint
as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO places(country, name) VALUES (vcountry, vname) returning place_id into ret;
  RETURN ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP function if exists create_wish(type_id bigint, category bigint, com_ncom text, participant_id bigint, mounth text);
--добавить желание
CREATE OR REPLACE FUNCTION create_wish(vtype_id bigint, vcategory bigint, vcom_ncom text, vparticipant_id bigint, vmonth text) RETURNS bigint
as
$BODY$
DECLARE
  ret bigint;
BEGIN
  INSERT INTO wishes(type_id, category, com_ncom, participant_id, month)
  VALUES (vtype_id, vcategory, vcom_ncom,vparticipant_id, vmonth) returning wish_id into ret;
  RETURN ret;
END;
$BODY$
  LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_sut_hikes(vparticipant_id bigint);
-- Найти подходящие походы по id участника
CREATE OR REPLACE FUNCTION get_sut_hikes(vparticipant_id bigint)
RETURNS TABLE(num bigint, type_hike text, category bigint, com_ncom text, month text, numberDays bigint, place text, country text)
as
  $BODY$
  BEGIN
      return query SELECT sugg_hikes.num, sugg_hikes.type_hike, sugg_hikes.category, sugg_hikes.com_ncom, sugg_hikes.month,sugg_hikes.number_days, sugg_hikes.name, sugg_hikes.country from sugg_hikes right join suitable_hikes on suitable_hikes.hike_id = sugg_hikes.num
             where suitable_hikes.wish_id in (select wishes.wish_id from wishes where wishes.participant_id=vparticipant_id);
  return next ;
    END
  $BODY$
LANGUAGE plpgsql;

