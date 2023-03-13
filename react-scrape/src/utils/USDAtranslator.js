const convertFromUSDA = (inputJSON, thresholds=null) => {

    const FDADV = {
        fat: 78, //grams
        protein: 50, //grams
        carbohydrate: 275, //grams
        sugar: 50, //grams (added sugars)
        sodium: 2300, //mg
    }

    const defaultThresholds = {
        fat: 0,
        protein: 0,
        carbohydrate: 0,
        sugar: 0,
        sodium: 0
    }

    let thresholdTable = {};

    thresholds ? thresholdTable = thresholds : thresholdTable = defaultThresholds;

    

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
        if (item.nutrientName === "Protein" && item.value > thresholdTable.protein * FDADV.protein) {
            template.nutrition.basic.push("Protein");
        } 
        // sugars
        else if (item.nutrientName.includes("Sugar") && item.value > thresholdTable.sugar * FDADV.sugar) {
            template.nutrition.basic.push("Sugar");
        } 
        // carbohydrates
        else if (item.nutrientName.includes("Carbohydrate") && item.value > thresholdTable.carbohydrate * FDADV.carbohydrate) {
            template.nutrition.basic.push("Carbohydrate");
        }
        // fats
        else if (item.nutrientName.includes("Total lipid (fat)") && item.value > thresholdTable.fat * FDADV.fat) {
            template.nutrition.basic.push("Fat");
        }
        //sodim
        else if (item.nutrientName.includes("Sodium, Na") && item.value > thresholdTable.sodium * FDADV.sodium) {
            template.nutrition.basic.push("Sodium")

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