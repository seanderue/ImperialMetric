let inputField = document.getElementById("input")
let input = document.getElementById("input").value

const FEET_TO_METERS = 0.3048
const METERS_TO_FEET = 3.2808399
const LITERS_TO_GALLONS = 0.219968813
const GALLONS_TO_LITERS = 4.5461
const KILOS_TO_POUNDS = 2.20462262
const POUNDS_TO_KILOS = 0.45359237

// Calculate
function convert(input, conversion){
    return (input * conversion).toFixed(3)
}

// Update HTML
function printConversion(sectionId, input)
{
    let unit1 = ""
    let unit2 = ""
    
        if(sectionId === "length")
        {
            unit1 = "meters"
            unit2 = "feet"
        }
        if(sectionId === "volume")
        {
            unit1 = "liters"
            unit2 = "gallons"
        }
        if(sectionId === "mass")
        {
            unit1 = "kilograms"
            unit2 = "pounds"
        }
     
    document.getElementById(sectionId).textContent = `${input} ${unit1} = ${convert(input, METERS_TO_FEET)} ${unit2} | ${input} ${unit2} = ${convert(input, FEET_TO_METERS)} ${unit1}`
        
}

// Run on change
function updateValues(){
    
        //Format input
        input = document.getElementById("input").value
        formatInput = input.replace(/\D/g, "")    
        document.getElementById("input").value = formatInput
        
        if (errorMessage(input) === false)
        {
            printConversion("length", input)
            printConversion("volume", input)
            printConversion("mass", input)
        }

}

//Places event listener
function render(){
inputField.addEventListener("input", updateValues)
}

// Says there are only 10 digits allowed
function errorMessage(input){
    if (input > 9999999999) 
    {
        document.getElementById("error").textContent = "C'mon, what do you need 10 digits for?"
        return true
    }
    if (input < 9999999999)
    {
        document.getElementById("error").textContent = ""
        return false  
    } 
}
updateValues()
render()
