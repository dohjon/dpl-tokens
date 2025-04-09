import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  // excludeParentKeys: true,
});

const PREFIX = 'dpl';
const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    json: {
      transformGroup: 'tokens-studio',
      prefix: PREFIX,
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      prefix: PREFIX,
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/',
      prefix: PREFIX,
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();

console.log('✅ Tokens built!');
