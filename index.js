/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("inputEl")

const toFeet = document.getElementById("toFeet")
const toMeter = document.getElementById("toMeters")

const toGallons = document.getElementById("toGallons")
const toLiters = document.getElementById("toLiters")

const toKilos = document.getElementById("toKilos")
const toPunds = document.getElementById("toPounds")

function convertToFeet() {
    const feet = ((Number(inputEl.value)) * 3.281).toFixed(3)
    const ut = `${inputEl.value} meter = ${feet} feet`
    toFeet.innerHTML = ut
}

function convertToMeter() {
    const meter = ((Number(inputEl.value)) / 3.281).toFixed(3)
    const ut = `${inputEl.value} feet = ${meter} meter`
    toMeter.innerHTML = ut
}

function convertToGallon() {
    const gallon = ((Number(inputEl.value)) * 0.264).toFixed(3)
    const ut = `${inputEl.value} liter = ${gallon} gallon`
    toGallons.innerHTML = ut
}

function convertToLiter() {
    const liter = ((Number(inputEl.value)) / 0.264).toFixed(3)
    const ut = `${inputEl.value} gallon = ${liter} liter`
    toLiters.innerHTML = ut
}

function convertToPound() {
    const pound = ((Number(inputEl.value)) * 2.204).toFixed(3)
    const ut = `${inputEl.value} kilogram = ${pound} pound`
    toPunds.innerHTML = ut
}

function convertToKilo() {
    const kilo = ((Number(inputEl.value)) / 2.204).toFixed(3)
    const ut = `${inputEl.value} pounds = ${kilo} kilo`
    toKilos.innerHTML = ut
}

function convert() {
    convertToFeet()
    convertToMeter()
    convertToGallon()
    convertToLiter()
    convertToPound()
    convertToKilo()
}