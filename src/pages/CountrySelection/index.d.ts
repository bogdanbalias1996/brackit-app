export type Country = {
  code: string
  name: string
}

export type CountrySelectionStateProps = {
  countries: Array<Country>
  searchText: string
  selectedCountryCode: string
}
export type CountrySelectionDispatchProps = {}

export type CountrySelectionProps = CountrySelectionStateProps & CountrySelectionDispatchProps