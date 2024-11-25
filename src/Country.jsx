export const Country = ({ country }) => {
  const lng = country.languages ? Object.values(country.languages) : [];
  const curr = country.currencies;
  const currKeys = Object.keys(curr ?? {});
  const currStringArr = currKeys.reduce((acc, key) => {
    acc.push(`${curr[key].name}(${curr[key].symbol})`);
    return acc;
  }, []);

  return (
    <div className="country">
      <div className="title">
        <img
          className="flag"
          src={country.flags.svg}
          alt={country.name.official}
        />
        <span className="boldCountry">{country.name.official}</span>
      </div>
      <div className="fields">
        <p className="field">
          <span className="boldField">Capital: </span>
          <span>{country.capital}</span>
        </p>

        <p className="field">
          <span className="boldField">Located in: </span>
          <span>{country.subregion}</span>
        </p>

      </div>
    </div>
  );
};
