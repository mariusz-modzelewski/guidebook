export const getFilteredEvents = (events, activeTypeEventFilters, activeDateEventFilters) => {
    const filteredByType = [];
    const filteredByDate = [];
    events.forEach(event => {
        activeTypeEventFilters.forEach(type => {
            if (event.type.name === type)
                filteredByType.push(event);
        })
    });
    filteredByType.forEach(event => {
        activeDateEventFilters.forEach(type => {
            const actualDate = new Date();

            const start = [...event.startDate];
            const s_year = `${start[0]}${start[1]}${start[2]}${start[3]}`;
            const s_month = `${start[5]}${start[6]}`;
            const s_day = `${start[8]}${start[9]}`;
            const s_hour = `${start[11]}${start[12]}`;
            const s_minutes = `${start[14]}${start[15]}`;
            const newStartDate = new Date(s_year, s_month - 1, s_day, s_hour, s_minutes);

            const end = [...event.endDate];
            const e_year = `${end[0]}${end[1]}${end[2]}${end[3]}`;
            const e_month = `${end[5]}${end[6]}`;
            const e_day = `${end[8]}${end[9]}`;
            const e_hour = `${end[11]}${start[12]}`;
            const e_minutes = `${end[14]}${end[15]}`;
            const newEndDate = new Date(e_year, e_month - 1, e_day, e_hour, e_minutes);
            switch (type) {
                case 'day': {
                    if (newStartDate - actualDate <= 86400000 && newEndDate - actualDate > 0)
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event);
                    break
                }
                case '3days': {
                    if (newStartDate - actualDate <= 259200000 && newEndDate - actualDate > 0)
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event);
                    break;
                }
                case 'week': {
                    if (newStartDate - actualDate <= 604800000 && newEndDate - actualDate > 0)
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event)
                    break;
                }
                case 'month': {
                    if (newStartDate - actualDate <= 2592000000 && newEndDate - actualDate > 0)
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event)
                    break;
                }
                case 'all': {
                    filteredByType.forEach(event => {
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event);
                    });
                    break;
                }
                default:
                    filteredByType.forEach(event => {
                        if (!filteredByDate.includes(event))
                            filteredByDate.push(event);
                    });
                    break;
            }

        });
    });

    const finalEvents = filteredByDate;

    return finalEvents;
}