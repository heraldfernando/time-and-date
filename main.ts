OLED.init(128, 64)
RTC_DS1307.DateTime(
2023,
8,
8,
14,
17,
19
)
basic.forever(function () {
    OLED.clear()
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
    OLED.writeString(":")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
    OLED.writeString(":")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
    OLED.writeString(", ")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY))
    OLED.writeString("/")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH))
    OLED.writeString("/")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR))
    OLED.newLine()
    OLED.writeString("Time and date")
    basic.pause(1000)
})
