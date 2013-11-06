/**
 * @constructor
 * @param {String} name - Name of the person
 * @param {Number} age - Age of the person
 * @param {String} city - City where person lives
 * @param {Person[]} [siblings] - Optional array of siblings
 */
Person = function(name, age, city, siblings){
  /** @private */
  var name = name;
  /** @private */
  var age = age;
  /** @private */
  var city = city;
  /** @private */
  var siblings = siblings;

  /**
   * @function
   * @desc This method returns the name of the person
   * @return {String} Name of person
   */
  this.getName = function(){
    return name;
  }

  /**
   * @function
   * @desc This method returns the age of the person
   * @return {Number} Age of person
   */
  this.getAge = function(){
    return age;
  }

  /**
   * @function
   * @deprecated
   * @desc This returns the data held by a person. Use toString
   * @return {String} The data of the person
   */
  this.getInfo = function(){
    return name + ' ' + age + ' ' + city;
  }

  /**
   * @function
   * @desc This returns an optional amount of data
   * @param {bool} incName - Include Name?
   * @param {bool} incAge - Include Age?
   * @param {bool} incCity - Include City?
   * @return {String} String of requested data
   */
  this.getSelectInfo = function(incName, incAge, incCity){
    var data = '';
    if(incName) data += name + ' ';
    if(incAge) data += age + ' ';
    if(incCity) data += city + ' ';
    return data;
  }

  /**
   * @function
   * @desc This returns the data held by a person
   * @return {String} The data of the person
   */
  this.toString = function(){
    return name + ' ' + age + ' ' + city;
  }
}