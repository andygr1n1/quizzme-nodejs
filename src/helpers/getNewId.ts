export const getNewId = (data: number[]) => {
    const newId = Math.max(...data) + 1
    return newId
}
