// @ts-check

const { caltotal } = require("./petcounter");

/**
 * @file index.js is the homepage for this application.
 * @author Carlos Roberto
 * @see <a href="https://github.com/caarlos1" target="_blank">GitHub</>
 */

/**
 * Pet name
 * @type {string}
 */
const petName = "Juninho";

/**
 * Number example
 * @type {number}
 */
const numberExample = 100;

/**
 * My Arrayzin
 * @type {Array<number>}
 */
const myArray = [10, 20, 30];

/**
 * My Arrayzin 2
 * @type {Array<number | string | boolean>}
 */
const myArray2 = [10, 20, 30, "Hi", true];

/**
 * My pet Object
 * @type {{id: number, name: string, age: number | string, gender: string}}
 */
const pet = {
  id: 1,
  name: "Juninho",
  age: "2",
  gender: "Male",
};

/**
 * Calculate pet ate
 * @param {number} current current year
 * @param {number} yearOfBirth year of pet birth
 * @returns {string} pet age
 */
const calculatePetAge = (current, yearOfBirth) => {
  return `${current - yearOfBirth}`;
};

// console.log(calculatePetAge(2021, 2019));

/**
 * @typedef {Object} Cat
 * @property {number} id id of cat
 * @property {string} name name of cat
 * @property {number | string} age age of cat
 * @property {boolean} [isMale] gender (optional)
 */

/**
 * @type {Cat}
 */
const cat = {
  id: 1,
  name: "Juninho",
  age: "2",
  isMale: true,
};

/**
 * Class to create a new pet owner
 */
class Owner {
  /**
   * Pet owner detail
   * @param {{name: string, age: number}} ownerDetail
   */
  constructor(ownerDetail) {
    /**
     * @property {string} name pet owner name
     */
    this.name = ownerDetail.name;
    /**
     * @property {number} age pet owner age
     */
    this.age = ownerDetail.age;
  }

  /**
   * @property {Function} printOwner print out owner information
   * @returns {void}
   */
  printOwner() {
    console.log(`Owner name is ${this.name} and her age is ${this.age}.`);
  }
}

/**
 * Link to Owner class
 * See {@link Owner}
 */
const petOwner = new Owner({
  name: "Carlinhos",
  age: 24,
});

petOwner.printOwner();

console.log(caltotal(4, 5));
