const showsData = [
    { Date: "Mon Sept 06 2021", Venue: "Ronald Lane", Location: "San Francisco, CA", Ticket: "BUY TICKETS" },
    { Date: "Tue Sept 21 2021", Venue: "Pier 3 East", Location: "San Francisco, CA", Ticket: "BUY TICKETS" },
    { Date: "Fri Oct 15 2021", Venue: "View Lounge", Location: "San Francisco, CA", Ticket: "BUY TICKETS" },
    { Date: "Sat Nov 06 2021", Venue: "Hyatt Agency", Location: "San Francisco, CA", Ticket: "BUY TICKETS" },
    { Date: "Fri Nov 26 2021", Venue: "Moscow Center", Location: "San Francisco, CA", Ticket: "BUY TICKETS" },
    { Date: "Wed Dec 15 2021", Venue: "Press Club", Location: "San Francisco, CA", Ticket: "BUY TICKETS" }
]

const showsParent = document.querySelector(".shows")

for (let i = 0; i < showsData.length; i++) {

    let newRow = document.createElement('div')
    let newDate = document.createElement('h4')
    let newVenue = document.createElement('h4')
    let newLocation = document.createElement('h4')
    let newButton = document.createElement('button')

    newRow.classList.add("mainrow")
    newDate.classList.add("row1")
    newVenue.classList.add("row")
    newLocation.classList.add("row")
    newButton.classList.add("button")

    newDate.innerText = showsData[i].Date
    newVenue.innerText = showsData[i].Venue
    newLocation.innerText = showsData[i].Location
    newButton.innerText = showsData[i].Ticket

    newRow.append(newDate)
    newRow.append(newVenue)
    newRow.append(newLocation)
    newRow.append(newButton)

    showsParent.append(newRow)
}