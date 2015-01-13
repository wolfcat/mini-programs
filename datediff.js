function calcFine(beg, end) {
	function monthDays(month, year) {
		var months = [
				31,
				28,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			];
		if (year % 4 === 0) {
			months[1] = 29;
		}
		return months[month];
	}
	if (end <= beg) {
		return 0;
	} else {
		var days = 0;
		if (beg.getMonth() == end.getMonth() && beg.getFullYear() == end.getFullYear()) {
			days += end.getDate() - beg.getDate();
		} else {
			days += (monthDays(beg.getMonth(), beg.getFullYear()) - beg.getDate());
			days += end.getDate();
			beg.setDate(beg.getDate() + (monthDays(beg.getMonth(), beg.getFullYear()) - beg.getDate() + 1));
			end.setDate(1);
			if (beg.getFullYear() == end.getFullYear()) {
				for (var i = beg.getMonth(); i < end.getMonth(); i++) {
					days += monthDays(i, beg.getFullYear());
				}
			} else {
				for (var i = beg.getMonth(); i <= 11; i++) {
					days += monthDays(i, beg.getFullYear());
				}
				beg.setFullYear(beg.getFullYear()+1);
				beg.setMonth(0);
				for (var i = end.getMonth() - 1; i >= 0; i--) {
					days += monthDays(i, end.getFullYear());
				}
				end.setMonth(0);
				for (var i = beg.getFullYear(); i < end.getFullYear(); i++) {
					if (i % 4 === 0) {
						days += 366;
					} else {
						days += 365;
					}
				}
			}
		}
		return days;
	}
}
