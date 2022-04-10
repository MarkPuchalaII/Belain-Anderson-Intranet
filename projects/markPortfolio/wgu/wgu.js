const deadline = new Date('08/01/2022')
// daysLeft is a countdown from today until the deadline
let daysLeft = Math.floor((deadline - new Date()) / (1000 * 60 * 60 * 24))
// credits tracks the number of credits left until graduation
let credits = 37
// tasks is the number of tasks divided by the course's credits
let tasks = classTasks / classCredits
// A single semester is 22 days
let semester = 182
let timelines = []

function updateProgress() {
    countDown()
    loadProgress()
    displayWorkload()
}

// display days left until deadline
function countDown() {
    if (daysLeft < 1) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!'
        return;
    }
    document.getElementById('countdown').innerHTML = daysLeft + " days left"
}

/*TODO: Implement an array to store tasks,
    Plus a loop to create li elements to store them.
    This is needed to prevent loadProgress() from breaking when ids aren't in order.
 */
// load tasks checked & not checked from localStorage
function loadProgress(){
    
    for (var i = 1; i < localStorage.length+1; i++) {
        id = i.toString()
        var checked = JSON.parse(localStorage.getItem(id))
        document.getElementById(id).checked = checked
    }
}

// display tasks per day from that above workload function
function displayWorkload() {
    workload()

    // Round out all paces; strange decimals just don't fit, here.
    idArray = ['oneSemester', 'twoSemesters', 'threeSemesters']
    i = 0, l = 3
    while (i < l) {
        if (timelines[i] < 1) {
            timelines[i] = 0
        } else { 
            timelines[i] = Math.ceil(timelines[i])
        }
        i++
    }
    
    //Create a sum variable to compare all paces against.
    i = 0, sum = 0
    while (i < l) {
        sum += timelines[i]
        i++
    }

    //Set a minimum pace if all but the last are too small.
    if (timelines[0] == sum) {
        timelines[0] = 1, sum += 1
    }

    // Display all relevant paces
    i = 0
    while (i < l) {
        if (timelines[i] < 1) {
            document.getElementById(idArray[i]).style.display = 'none'
        } else { 
                document.getElementById(idArray[i]).style.display = 'grid'
                document.getElementById(idArray[i]).innerHTML = timelines[i]
            }
        newWidth = timelines[i] / sum * 100
        document.getElementById(idArray[i]).style.width = newWidth + '%'
        i++
    }
}

// calculate tasks per day for varying work paces
function workload() {
    // assign degree plan duration for item 1
    timelines[0] = daysLeft

    // assign degree plan durations for 2, 3, and 4
    i = 1, l = 3
    while (i < l) {
        timelines[i] = timelines[i-1] + semester
        i++
    }

    // calculate tasks per day for 1, 2, & 3
    i = 0, l = 3
    while (i < l) {
        timelines[i] = tasks / (timelines[i] / credits)
        i++
    }
}

// If a task gets checked on or off, send it to localStorage
function save(id){
    var checky = document.getElementById(id)
    localStorage.setItem(id, checky.checked)
}
