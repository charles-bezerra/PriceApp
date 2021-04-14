class FormateDateUtil {
    completeWithZero (digite) {
        const value = parseInt(digite);
        return value > 9 ? `${value}` : `0${value}`;
    }

    toUsualDate(date) {
        let newDate;

        if (date) {
            newDate = new Date(date);
        }
        else {
            newDate = new Date();
        }

        const day = this.completeWithZero( newDate.getDate() );
        const month = this.completeWithZero( newDate.getDay() );
        const year = newDate.getFullYear();
      
        return `${day}/${month}/${year}`;
    }
}

export default FormateDateUtil;