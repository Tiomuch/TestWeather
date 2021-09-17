const getDate = (time: number): string => {
    const maxDate = new Date(time * 1000)
    let month: string = (maxDate.getMonth() + 1).toString()
    if (Number(month) <= 9) {
        month = '0' + month
    }
    return (maxDate.getDate() + '.' + month)
}

const getTime = (time: number): string => {
    const maxDate = new Date(time * 1000)
    return (maxDate.getHours() + ':' + maxDate.getMinutes())
}

const getDayOfWeek = (time: number): string => {
    const date = new Date(time * 1000)

    let result: string = ''
    switch (date.getDay()){
        case 0:
            result = 'Sunday'
            break
        case 1:
            result = 'Monday'
            break
        case 2:
            result = 'Tuesday'
            break
        case 3:
            result = 'Wednesday'
            break
        case 4:
            result = 'Thursday'
            break
        case 5:
            result = 'Friday'
            break
        default:
            result = 'Saturday'
            break
    }

    return result
}

const getTemp = (temp: number): number => {
    return Math.round(temp - 273.15)
}

export default {getTemp, getDate, getTime, getDayOfWeek}