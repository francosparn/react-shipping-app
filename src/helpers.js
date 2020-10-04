// Calculate the total amount to pay according to the province
export function calculateProvince(province){
    let increment;

    switch(province){
        case 'Buenos Aires':
            increment = 1.10;
            break;
        case 'Catamarca':
            increment = 1.29;
            break;
        case 'Chaco':
            increment = 1.19;
            break;
        case 'Chubut':
            increment = 1.19;
            break;
        case 'Cordoba':
            increment = 1.12;
            break;
        case 'Corrientes':
            increment = 1.18;
            break;
        case 'Entre Rios':
            increment = 1.07;
            break;
        case 'Formosa':
            increment = 1.28;
            break;
        case 'Jujuy':
            increment = 1.37;
            break;  
        case 'La Pampa':
            increment = 1.16;
            break;  
        case 'Mendoza':
            increment = 1.22;
            break;  
        case 'Misiones':
            increment = 1.33;
            break;  
        case 'Neuquen':
            increment = 1.35;
            break;  
        case 'Rio Negro':
            increment = 1.45;
            break;  
        case 'Salta':
            increment = 1.38;
            break;  
        case 'San Juan':
            increment = 1.26;
            break;  
        case 'San Luis':
            increment = 1.15;
            break;  
        case 'Santa Cruz':
            increment = 1.55;
            break;  
        case 'Santa Fe':
            increment = 1.05;
            break;  
        case 'Santiago del Estero':
            increment = 1.20;
            break;  
        case 'Tierra del Fuego':
            increment = 1.60;
            break;  
        case 'Tucuman':
            increment = 1.32;
            break;
        default:
            break;
    }

    return increment;
}

// Calculate the amount to pay according to the weight of the shipment
export function calculateWeight(weight){
    let increment;

    switch(weight){
        case '0-4':
            increment = 1.10;
            break;
        case '5-9':
            increment = 1.12;
            break;
        case '10-14':
            increment = 1.15;
            break;
        case '15-19':
            increment = 1.20;
            break;
        case '20-24':
            increment = 1.22;
            break;
        case '25-29':
            increment = 1.25;
            break;
        case '30-50':
            increment = 1.35;
            break;
        default:
            break;
    }

    return increment;
}

// Calculate the type of shipment (Normal / Express)
export function getPlan(plan){
    return(plan === 'normal') ? 1.10 : 1.35;
}

// Show first letter in uppercase
export function upperCase(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}