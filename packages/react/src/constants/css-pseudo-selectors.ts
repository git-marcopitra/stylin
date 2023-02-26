import type { SimplePseudos } from 'csstype';

import { StylinSimplePseudos } from '../lib/stylin.types';

export const CSSPseudoSelectors: Record<StylinSimplePseudos, SimplePseudos> = {
  'on-cue': '::cue',
  'on-cueRegion': '::cue-region',
  'on-khtmlAnyLink': ':-khtml-any-link',
  'on-mozAnyLink': ':-moz-any-link',
  'on-mozFocusring': ':-moz-focusring',
  'on-mozFullScreen': ':-moz-full-screen',
  'on-mozReadOnly': ':-moz-read-only',
  'on-mozReadWrite': ':-moz-read-write',
  'on-mozUiInvalid': ':-moz-ui-invalid',
  'on-mozUiValid': ':-moz-ui-valid',
  'on-msFullscreen': ':-ms-fullscreen',
  'on-webkitAnyLink': ':-webkit-any-link',
  'on-webkitFullScreen': ':-webkit-full-screen',
  'on-mozPlaceholder': '::-moz-placeholder',
  'on-mozProgressBar': '::-moz-progress-bar',
  'on-mozRangeProgress': '::-moz-range-progress',
  'on-mozRangeThumb': '::-moz-range-thumb',
  'on-mozRangeTrack': '::-moz-range-track',
  'on-mozSelection': '::-moz-selection',
  'on-msBackdrop': '::-ms-backdrop',
  'on-msBrowse': '::-ms-browse',
  'on-msCheck': '::-ms-check',
  'on-msClear': '::-ms-clear',
  'on-msFill': '::-ms-fill',
  'on-msFillLower': '::-ms-fill-lower',
  'on-msFillUpper': '::-ms-fill-upper',
  'on-msInputPlaceholder': '::-ms-input-placeholder',
  'on-msReveal': '::-ms-reveal',
  'on-msThumb': '::-ms-thumb',
  'on-msTicksAfter': '::-ms-ticks-after',
  'on-msTicksBefore': '::-ms-ticks-before',
  'on-msTooltip': '::-ms-tooltip',
  'on-msTrack': '::-ms-track',
  'on-msValue': '::-ms-value',
  'on-webkitBackdrop': '::-webkit-backdrop',
  'on-webkitInputPlaceholder': '::-webkit-input-placeholder',
  'on-webkitProgressBar': '::-webkit-progress-bar',
  'on-webkitProgressInnerValue': '::-webkit-progress-inner-value',
  'on-webkitProgressValue': '::-webkit-progress-value',
  'on-webkitSliderRunnableTrack': '::-webkit-slider-runnable-track',
  'on-webkitSliderThumb': '::-webkit-slider-thumb',
  'on-after': '::after',
  'on-backdrop': '::backdrop',
  'on-before': '::before',
  'on-firstLetter': '::first-letter',
  'on-firstLine': '::first-line',
  'on-grammarError': '::grammar-error',
  'on-marker': '::marker',
  'on-placeholder': '::placeholder',
  'on-selection': '::selection',
  'on-spellingError': '::spelling-error',
  'on-targetText': '::target-text',
  'on-active': ':active',
  'on-anyLink': ':any-link',
  'on-blank': ':blank',
  'on-checked': ':checked',
  'on-current': ':current',
  'on-default': ':default',
  'on-defined': ':defined',
  'on-disabled': ':disabled',
  'on-empty': ':empty',
  'on-enabled': ':enabled',
  'on-first': ':first',
  'on-firstChild': ':first-child',
  'on-firstOfType': ':first-of-type',
  'on-focus': ':focus',
  'on-focusVisible': ':focus-visible',
  'on-focusWithin': ':focus-within',
  'on-fullscreen': ':fullscreen',
  'on-future': ':future',
  'on-hover': ':hover',
  'on-inRange': ':in-range',
  'on-indeterminate': ':indeterminate',
  'on-invalid': ':invalid',
  'on-lastChild': ':last-child',
  'on-lastOfType': ':last-of-type',
  'on-left': ':left',
  'on-link': ':link',
  'on-localLink': ':local-link',
  'on-nthCol': ':nth-col',
  'on-nthLastCol': ':nth-last-col',
  'on-onlyChild': ':only-child',
  'on-onlyOfType': ':only-of-type',
  'on-optional': ':optional',
  'on-outOfRange': ':out-of-range',
  'on-past': ':past',
  'on-paused': ':paused',
  'on-pictureInPicture': ':picture-in-picture',
  'on-placeholderShown': ':placeholder-shown',
  'on-readOnly': ':read-only',
  'on-readWrite': ':read-write',
  'on-required': ':required',
  'on-right': ':right',
  'on-root': ':root',
  'on-scope': ':scope',
  'on-target': ':target',
  'on-targetWithin': ':target-within',
  'on-userInvalid': ':user-invalid',
  'on-userValid': ':user-valid',
  'on-valid': ':valid',
  'on-visited': ':visited',
};