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
        <span>{country.name.common}</span>
      </div>
      <div className="fields">
        <p className="field">
          <span>Official name:</span>
          <span>{country.name.official}</span>
        </p>

        <p className="field">
          <span>Capital:</span>
          <span>{country.capital}</span>
        </p>

        <p className="field">
          <span>Located in:</span>
          <span>{country.subregion}</span>
        </p>

      </div>
    </div>
  );
};
