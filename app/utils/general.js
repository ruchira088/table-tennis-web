export const updateArray = (array, index, value) => {

    if (array.length === 0) {
        return []
    } else {
        const [head, ...tail] = array

        if(index === 0) {
            return [value].concat(tail)
        } else {
            return [head].concat(updateArray(tail, index - 1, value))
        }
    }

}