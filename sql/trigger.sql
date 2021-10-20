CREATE OR REPLACE FUNCTION public.add_or_delete_participant_in_hike()
  RETURNS TRIGGER AS
$$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE hikes
    SET number_people = number_people + 1
    where hike_id = new.hike_id;
    return new;

  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE hikes
    SET number_people = number_people - 1
    where hike_id = old.hike_id;
    return OLD;
  END IF;

end;
$$ LANGUAGE plpgsql;

-- После добавления или удаления данных из таблицы "выбранные походы", в соответствующем походе увеличивается или уменьшается количество человек
DROP TRIGGER IF EXISTS add_participant_in_hike ON selected_hikes;
CREATE TRIGGER add_participant_in_hike
  AFTER INSERT OR DELETE
  ON selected_hikes
  FOR EACH ROW
EXECUTE PROCEDURE add_or_delete_participant_in_hike();


CREATE or replace FUNCTION public.find_sut_hikes()
  RETURNS trigger AS
$$
BEGIN
INSERT INTO suitable_hikes (wish_id, hike_id) (SELECT new.wish_id, sugg_hikes.num
                                              FROM sugg_hikes
                                              WHERE sugg_hikes.type_hike in(select type_hike from type_hike where type_hike.type_id = new.type_id)
                                                AND sugg_hikes.com_ncom = new.com_ncom
                                                AND sugg_hikes.month = new.month
                                                AND sugg_hikes.category <= new.category + 1);
  return new;

end;
$$ LANGUAGE plpgsql;
-- При добавлении строки в таблицу "пожелания", происходит сопоставление с таблицей походов и, исходя из этого, обновляется таблица подходящие походы
DROP TRIGGER IF EXISTS find_sut_hikes on wishes;
CREATE TRIGGER find_sut_hikes
  AFTER INSERT
  ON wishes
  for each row
execute procedure find_sut_hikes();




