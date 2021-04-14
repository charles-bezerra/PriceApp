const inExcepts = (array, key) => {
  let i = 0, 
      founded = false;

  while (i < array.length && !founded) {
    if (array[i] === key) {
      founded=true;
    }
  }

  return founded;
}

export const verifyAllFieldsUtil = (obj, excepts = []) => {
    let result = true;

    Object
      .keys(obj)
      .forEach( (key) => {
        if( (obj[key] === "" || obj[key] === 0) && !inExcepts(excepts, key)) {
          result = false;
        }
      });

    return result;
} 

export function notFountKeyUtil (argObject, key) {
    let found = false;
    
    Object
        .keys(argObject)
        .forEach( (keyArg) => {
            if (keyArg === key) {
                found=true;
            }
        });

    if (!found) {
        throw new Error(`Attribute not fount in payload: ${key}`);
    }
}