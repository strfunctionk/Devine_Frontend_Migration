/**
 * pxr - px to rem Tailwind v4 plugin
 * Base: font-size 62.5% → 1rem = 10px
 * Usage: p-16pxr → padding: 1.6rem
 */

const pxrValues = {};
for (let i = 0; i <= 2400; i++) {
  pxrValues[`${i}pxr`] = `${i / 10}rem`;
}

module.exports = ({ matchUtilities }) => {
  matchUtilities(
    {
      p: (value) => ({ padding: value }),
      px: (value) => ({ paddingLeft: value, paddingRight: value }),
      py: (value) => ({ paddingTop: value, paddingBottom: value }),
      pt: (value) => ({ paddingTop: value }),
      pr: (value) => ({ paddingRight: value }),
      pb: (value) => ({ paddingBottom: value }),
      pl: (value) => ({ paddingLeft: value }),
    },
    { values: pxrValues },
  );

  matchUtilities(
    {
      m: (value) => ({ margin: value }),
      mx: (value) => ({ marginLeft: value, marginRight: value }),
      my: (value) => ({ marginTop: value, marginBottom: value }),
      mt: (value) => ({ marginTop: value }),
      mr: (value) => ({ marginRight: value }),
      mb: (value) => ({ marginBottom: value }),
      ml: (value) => ({ marginLeft: value }),
    },
    { values: pxrValues, supportsNegativeValues: true },
  );

  matchUtilities(
    {
      w: (value) => ({ width: value }),
      h: (value) => ({ height: value }),
      'min-w': (value) => ({ minWidth: value }),
      'max-w': (value) => ({ maxWidth: value }),
      'min-h': (value) => ({ minHeight: value }),
      'max-h': (value) => ({ maxHeight: value }),
    },
    { values: pxrValues },
  );

  matchUtilities(
    {
      gap: (value) => ({ gap: value }),
      'gap-x': (value) => ({ columnGap: value }),
      'gap-y': (value) => ({ rowGap: value }),
    },
    { values: pxrValues },
  );

  matchUtilities(
    {
      top: (value) => ({ top: value }),
      right: (value) => ({ right: value }),
      bottom: (value) => ({ bottom: value }),
      left: (value) => ({ left: value }),
      inset: (value) => ({ inset: value }),
    },
    { values: pxrValues, supportsNegativeValues: true },
  );

  matchUtilities(
    {
      rounded: (value) => ({ borderRadius: value }),
    },
    { values: pxrValues },
  );

  matchUtilities(
    {
      text: (value) => ({ fontSize: value }),
    },
    { values: pxrValues },
  );
};
