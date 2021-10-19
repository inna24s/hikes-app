const db = require('./hike_model')

class UserController {

    async createHike(req, res) {
        const {com_ncom, category, type_id, number_days, month, } = req.body;
        const newHike =  await db.query('SELECT create_hike($1, $2, $3, $4, $5, $6, $7) RETURNING *',[type_id, category, com_ncom, month, 0, number_days] );
        res.json(newHike.rows[0]);
    }

    async createWish(req, res) {
        let { hikeType, hikeKind, category, month} = req.body;
        console.log(req.body);
        console.log("1")
        const type_id = await db.query('Select type_id from type_hike where type_hike = $1' , [hikeKind]);
        console.log("2")
        await db.query('Insert into wishes(type_id, category, com_ncom, participant_id, month) values ($1, $2, $3, $4, $5) ', [type_id.rows[0].type_id, Number(category), hikeType, part_id.rows[0].id, month]);
    }

    // async getSutHikes(req, res) {
    //     const {participant_name} = req.body;
    //     let participant_id = await db.query('Select id from participants where fcs = $1', [participant_name]);
    //     if(participant_id===null)
    //         res.json("Take the test to find suitable hikes!")
    //     else {
    //         const suitableHikes = await db.query('SELECT * FROM get_sut_hikes($1)', [participant_id.rows[0].id]);
    //         console.log("Size: ")
    //         console.log(suitableHikes.rows.length);
    //         //if (suitableHikes.rows.length === 1) res.json(0);
    //         res.json(suitableHikes.rows);
    //     }
    // }

    async getSutHikes(req, res) {
        let { hikeType, hikeKind, category, month} = req.body;
        const suitableHikes = await db.query('SELECT * FROM get_sut_hikes($1)', [participant_id.rows[0].id]);
            console.log("Size: ")
            console.log(suitableHikes.rows.length);
            //if (suitableHikes.rows.length === 1) res.json(0);
            res.json(suitableHikes.rows);
    }

    async getHikes(req, res) {
        console.log("Here: ")
        const users = await db.query('SELECT * from sugg_hikes');
        res.json(users.rows);
    }

    async findEquip(req, res){
        const {category_equipment, typeHikeEquipment}=req.body;
        const suitEquip=await db.query('select type_equipment, equipment.cost_day_rub from equipment_for_hike join equipment on equipment_for_hike.equipment_id=equipment.id where category=$1 and type_id in(select type_id from type_hike where type_hike=$2)',[Number(category_equipment), typeHikeEquipment]);
        res.json(suitEquip.rows);
    }

    async findCostNutrition(req, res){
        const {category, typeHike, numberDays}=req.body;
        const costNutr = await db.query('select cost_day_rub from nutrition where category=$1 and type_id in(select type_id from type_hike where type_hike=$2)',[category, typeHike]);
        let sum= costNutr.rows[0].cost_day_rub*Number(numberDays);
        res.json(sum);
    }

    async findCostHike(req, res) {
        const {category, typeHike, country, place, month, number_days } = req.body;
        const costHike = await db.query('select cost_rub from sugg_hikes where category = $1 and type_hike=$2 and country=$3 and name=$4 and month=$5 and number_days=$6', [category, typeHike, country, place, month, number_days]);
        console.log(costHike.rows[0]);
        res.json(costHike.rows[0].cost_rub);

    }
    async findCostTransfer(req, res){
        const {country, place}=req.body;
        const costTrans = await db.query('select cost_rub from transfer where place_id in (select place_id from places where country=$1 and name=$2)',[country, place]);
        res.json(costTrans.rows[0].cost_rub);
    }

    async aboutHikes(req, res) {}
    async aboutUs(req, res) {}
    async mainPage(req, res) {}
    async reviews(req, res) {}
    async contacts(req, res){}
    async test(req, res) {}

}

module.exports = new UserController();