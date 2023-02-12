import { CUSTOM_PROPERTY_MAP, StylinCustomProperties } from './constants';
import renderThemedStyle from './render-themed-style';
import { CSSPropertiesKeys, TRenderProperty } from './stylin.types';

const renderProperty: TRenderProperty = (theme, prop, value) => {
  if (StylinCustomProperties[prop])
    return (
      CUSTOM_PROPERTY_MAP[
        StylinCustomProperties[prop]
      ] as ReadonlyArray<CSSPropertiesKeys>
    ).reduce(
      (acc, property) => ({
        ...acc,
        [property]: renderThemedStyle(theme, property, value),
      }),
      {}
    );

  return { [prop]: renderThemedStyle(theme, prop, value) };
};

export default renderProperty;
