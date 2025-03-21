import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'], // 👈 Where your design tokens live
  preprocessors: ['tokens-studio'], // 👈 This enables Tokens Studio specific processing
  platforms: {
    js: {
      transformGroup: 'tokens-studio', // 👈 apply the tokens-studio transformGroup to apply all transforms
      buildPath: 'dist/',
      transforms: [
        // 'size/pxToRem',
        // 'name/constant',
        // 'attribute/cti',
      ],
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();

console.log('✅ Tokens built!');
