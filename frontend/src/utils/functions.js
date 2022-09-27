export const reduceString =  (string) => {
    if(string.length > 45)
        return string.slice(0, 45) + "..."
    return string
}


export function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
  }

