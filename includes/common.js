/* 
 * The function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function countryGroup(countryCodeField) {
  return `case
            when ${countryCodeField} in ('us', 'ca') then 'NA'
            when ${countryCodeField} in ('gb', 'fr', 'de', 'it', 'pl') then 'EU'
            when ${countryCodeField} in ('AU') then ${countryCodeField}
            else 'Other countries'
            end`;
}

module.exports = {
  countryGroup
};
