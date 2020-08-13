export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes = (hour * 60) + (minutes < 60 && minutes >= 0 ? minutes : 0)

    return timeInMinutes
}