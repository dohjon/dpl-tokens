import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { getTransforms } from '@tokens-studio/sd-transforms';

register(StyleDictionary, {
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'tokens.js',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'tokens.d.ts',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();

console.log('✅ Tokens built!');
