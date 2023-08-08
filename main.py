OLED.init(128, 64)
RTC_DS1307.date_time(2023, 8, 8, 14, 17, 19)

def on_forever():
    OLED.clear()
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR))
    OLED.write_string(":")
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE))
    OLED.write_string(":")
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.SECOND))
    OLED.write_string(", ")
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.DAY))
    OLED.write_string("/")
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.MONTH))
    OLED.write_string("/")
    OLED.write_num(RTC_DS1307.get_time(RTC_DS1307.TimeType.YEAR))
    OLED.new_line()
    OLED.write_string("Time and date")
    basic.pause(1000)
basic.forever(on_forever)
