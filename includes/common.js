/* 
 * The function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function countryGroup(countryCodeField) {
  return `case
            when lower(${countryCodeField}) in ('united states', 'canada') then 'NA'
            when lower(${countryCodeField}) in ('united kingdom', 'france', 'germany', 'italy', 'poland') then 'EU'
            when lower(${countryCodeField}) in ('australia') then lower(${countryCodeField})
            else 'Other countries'
            end`;
}

module.exports = {
  countryGroup
};
