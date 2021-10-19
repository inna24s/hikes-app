export default function setHikeCostAction(hikeCost){
    console.log("hikeCost");
    return {
        type: "SET_HIKECOST",
        payload: hikeCost
    }
}