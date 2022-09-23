export const reduceString =  (string) => {
    if(string.length > 45)
        return string.slice(0, 45) + "..."
    return string
}