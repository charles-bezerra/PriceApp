const deleteNoDigite = (value) => value.replace(/[\D]/g, "");
const deleteLeftZeros = (value) => value.replace(/^0+/g, "");

const formateShowPrice = (value) => {
    if (value.length < 3) {
        for (let i = 0; i < 3 - value.length; i++) 
            value = `0${value}`;
    }

    const lengthValue = value.length;
    const cutPoint = lengthValue-2;

    return `${value.slice(0, cutPoint)},${value.slice(cutPoint, lengthValue)}`;
}

export const priceFormater = (value) => {
    if ( value === "" ) value = "0.00";
    value = deleteNoDigite( deleteLeftZeros(value) );   
    return formateShowPrice(value);
};
