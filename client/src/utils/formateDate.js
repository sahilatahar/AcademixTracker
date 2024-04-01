import dayjs from "dayjs"

export const formateDate = (date) => { 
    return dayjs(date).format('YYYY-MM-DD')
}