const convertFromUSDA = (inputJSON) => {

    const template = {
        foodName: inputJSON.description,
        nutrition: {
            basic: [],
            vitamins: [],
            minerals: [],
            energy: null
        },
        dietaryTags: [],
        alergenTags:[],
        metadata: {
            USDAId: inputJSON.fdcId,
            foodCode: inputJSON.foodCode
        }
    };

    const nutrients = inputJSON.foodNutrients;

    nutrients.forEach((item)=>{
        // proteins
        if (item.nutrientName === "Protein" && item.value > 0) {
            template.nutrition.basic.push("Protein");
        } 
        // sugars
        else if (item.nutrientName.includes("Sugar") && item.value > 0) {
            template.nutrition.basic.push("Sugar");
        } 
        // carbohydrates
        else if (item.nutrientName.includes("Carbohydrate") && item.value > 0) {
            template.nutrition.basic.push("Carbohydrate");
        }
        // fats
        else if (item.nutrientName.includes("Total lipid (fat)") && item.value > 0) {
            template.nutrition.basic.push("Fat");
        }
        // minerals
        else if (301 <= item.nutrientNumber && item.nutrientNumber <= 319 && item.value > 0) {
            template.nutrition.minerals.push(item.nutrientName);
        }
        // vitamins
        else if (320 <= item.nutrientNumber && item.nutrientNumber <= 578 && item.value > 0) {
            template.nutrition.vitamins.push(item.nutrientName);
        }
        // energy
        else if (item.nutrientName === "Energy") {
            template.nutrition.energy = item.value;
        }
    })

    return template;
}

export default convertFromUSDA;