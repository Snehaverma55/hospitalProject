const beds = [
    { id: "B101", type: "General", status: "Available" },
    { id: "B102", type: "General", status: "Occupied" },
    { id: "B103", type: "ICU", status: "Occupied" },
    { id: "B104", type: "General", status: "Available" },
    { id: "ICU01", type: "ICU", status: "Occupied" },
    { id: "ICU02", type: "ICU", status: "Available" }
];


const total = beds.length;
const available = beds.filter(b => b.status === "Available").length;
const occupied = beds.filter(b => b.status === "Occupied").length;


let statusText = "Normal";
if (available <= 2) statusText = "Critical";
else if (available <= 4) statusText = "Limited";


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalBeds").innerText = total;
    document.getElementById("availableBeds").innerText = available;
    document.getElementById("occupiedBeds").innerText = occupied;
    document.getElementById("bedStatus").innerText = statusText;

    
    document.querySelector(".details-btn").onclick = () => {
    window.location.href = "bed-management.html";
};

});

const icuBeds = beds.filter(b => b.type === "ICU");
const totalICU = icuBeds.length;
const availableICU = icuBeds.filter(b => b.status === "Available").length;
const occupiedICU = icuBeds.filter(b => b.status === "Occupied").length;

let icuStatusText = "Stable";
if (availableICU <= 1) icuStatusText = "Critical";



const doctors = [
    { name: "Dr. Sharma", status: "On Duty" },
    { name: "Dr. Mehta", status: "Off Duty" },
    { name: "Dr. Khan", status: "On Duty" },
    { name: "Dr. Verma", status: "On Duty" }
];

const totalDoctors = doctors.length;
const onDutyDoctors = doctors.filter(d => d.status === "On Duty").length;
const offDutyDoctors = doctors.filter(d => d.status === "Off Duty").length;
const doctorShift = "Morning";



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalICU").innerText = totalICU;
    document.getElementById("availableICU").innerText = availableICU;
    document.getElementById("occupiedICU").innerText = occupiedICU;
    document.getElementById("icuStatus").innerText = icuStatusText;

    document.getElementById("totalDoctors").innerText = totalDoctors;
    document.getElementById("onDutyDoctors").innerText = onDutyDoctors;
    document.getElementById("offDutyDoctors").innerText = offDutyDoctors;
    document.getElementById("doctorShift").innerText = doctorShift;

    document.querySelectorAll(".details-btn")[1].onclick = () => {
        window.location.href = "icu-management.html";
    };

    document.querySelectorAll(".details-btn")[2].onclick = () => {
        window.location.href = "doctor-schedule.html";
    };
});

