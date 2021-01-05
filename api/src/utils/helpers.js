
const {v1: uuidv1 } = require('uuid');

const Helpers = {
  generateUUID: () => {
     const uuid = uuidv1();  
     return uuid;
  },
  /** * Checks type op yearly averages param *
   * @param months - object 'months' where type of has to be checken *
   * @returns months if correct, false if not correct */

  checkYearlyAverages: (months) =>{
    if(typeof months === 'object' && months !== null && !Array.isArray(months)){
      return months
    }else{
      return false
    }
  },
  
  /** * Checks length of geohash *
   * @param geohash - geohash of which the length has to be checked *
   * @returns geohash if correct, false if not correct */

  checkGeohashLength: (geohash) =>{
    if(geohash.length <= 12){
      return geohash
    }else{
      return false
    }
  },

   /** * Checks  if geohash only contains digits and numbers *
   * @param geohash - geohash of which the format has to be checked *
   * @returns geohash if correct, false if not correct */
  
  checkGeohashFormat: (geohash) =>{
    if(geohash.match("^[A-​Za-z0-9]+$") !== null){
      return geohash
    }else{
      return false
    }
  }

}

module.exports = Helpers