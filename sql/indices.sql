CREATE INDEX IF NOT EXISTS part_card ON participants USING btree (card_id);

CREATE INDEX IF NOT EXISTS cost_equip ON equipment USING btree (cost_day_rub);
CREATE INDEX IF NOT EXISTS type_equip ON equipment USING hash(type_equipment);

CREATE INDEX IF NOT EXISTS type_pet ON pets USING hash(type_pet);

CREATE INDEX IF NOT EXISTS id_hike ON hikes USING btree(hike_id);
CREATE INDEX IF NOT EXISTS cost_hike ON hikes USING btree(cost_rub);
CREATE INDEX IF NOT EXISTS numb_days ON hikes USING btree(number_days);
CREATE INDEX IF NOT EXISTS hike_categ ON hikes USING btree(category);
CREATE INDEX IF NOT EXISTS month_hike ON hikes USING hash(month);


CREATE INDEX IF NOT EXISTS id_lead ON leaders USING btree(id);
CREATE INDEX IF NOT EXISTS name_lead ON leaders USING hash(fsc);
CREATE INDEX IF NOT EXISTS month_lead ON leaders USING hash(month);

CREATE INDEX IF NOT EXISTS name_counrty ON places USING hash(country);
CREATE INDEX IF NOT EXISTS name_place ON places USING hash(name);

CREATE INDEX IF NOT EXISTS cost_tran ON transfer USING btree(cost_rub);

