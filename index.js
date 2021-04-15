// Code your solution here
const findMatching = (drivers, string) =>{
   const matches = drivers.filter(driver=>driver.toLowerCase() === string.toLowerCase())
   return matches
}

const fuzzyMatch = (drivers, string) =>{
    const fuzzies = drivers.filter(driver=> driver.charAt(0) === string.charAt(0))
    return fuzzies
}

const matchName = (drivers,string)=>{
    const matches = drivers.filter(driver=> driver.name === string)
    return matches
}