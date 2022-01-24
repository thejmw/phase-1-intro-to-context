// Your code here
// ['firsnt','last','titl', 5]
const createEmployeeRecord = (recArray) => {
    const [firstName, familyName, title, payPerHour] = recArray
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [ ],
        timeOutEvents: [ ]
    }
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = (bpRecord, dateStamp) => {
    const arryFromDate = dateStamp.split(" ")
    const date = arryFromDate[0]
    const hour = arryFromDate[1]
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    bpRecord.timeInEvents.push(inEvent)
    return bpRecord
}
    
const createTimeOutEvent = (bpRecord, dateStamp) => {
    const arryFromDate = dateStamp.split(" ")
    const date = arryFromDate[0]
    const hour = arryFromDate[1]
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    bpRecord.timeOutEvents.push(outEvent)
    return bpRecord
}

const hoursWorkedOnDate = (empRec, date) => {
    const inEvent = empRec.timeInEvents.find(record => record.date === date)
    const outEvent = empRec.timeOutEvents.find(record => record.date === date)
    const inHour = inEvent.hour
    const outHour = outEvent.hour

    const hoursWorked = outHour - inHour
    return hoursWorked / 100
}
 
function wagesEarnedOnDate(empRec, date) {
    const hoursWorked = hoursWorkedOnDate(empRec, date)
    const dollarsEarned = hoursWorked * empRec.payPerHour

    return dollarsEarned
}

function allWagesFor(empRec, date){
    const datesWorked = empRec.timeInEvents.map(evnt => date.payPerHour)

    
    return evnt.date.payPerHour
}

function calculatePayroll(){

}