import { NON_STYLE_ELEMENTS } from '../constants/index.js';
import getControllerClassNames from './controllers.js';
import { GetStyleArguments, RenderStylesArguments } from './types';
import {
  getStylinStyles,
  makeStyleId,
  parseStyle,
  removeAttributes,
} from './utils.js';

export default class Stylin {
  classes: Array<[string, string]>;
  stylinStyleElement: Element | null;
  stylinCustomStyleElement: Element | null;

  constructor() {
    this.classes = [];
    this.stylinStyleElement = null;
    this.stylinCustomStyleElement = null;

    this.setup();
  }

  setup() {
    const id = crypto.randomUUID().split('-')[0];

    const stylinId = `stylin-${id}`;
    const stylinCustomId = `stylin-${id}__custom`;

    document.head.insertAdjacentHTML(
      'beforeend',
      `<style id="${stylinCustomId}"></style>\n
      <style id="${stylinId}"></style>`
    );

    this.stylinCustomStyleElement = document.querySelector(
      `style#${stylinCustomId}`
    );

    this.stylinStyleElement = document.querySelector(`style#${stylinId}`);
  }

  init(element?: Element) {
    this.runStylin(element ?? document.body);
  }

  runStylin(element: Element): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (NON_STYLE_ELEMENTS.includes(element.localName)) return;

    [...element.children].forEach(function (child) {
      self.runStylin(child);
    });

    const { useClassNameList, defClassName } = getControllerClassNames(element);

    const styleId = this.getStyle({ element, defClassName, useClassNameList });

    if (!styleId) return;

    element.className += styleId.replace(/\./g, ' ');
  }

  getReusableClassByStyle(styles: string) {
    if (!styles) return;

    return this.classes.find(([, style]) => style === styles)?.[0];
  }

  addNewClass(classNameList: ReadonlyArray<string>, styles: string) {
    if (!classNameList.length || !styles) return;

    this.classes.push([classNameList.join(' '), styles]);
  }

  getStyle({ element, defClassName, useClassNameList }: GetStyleArguments) {
    const styles = getStylinStyles(element);

    if (!styles.length && !useClassNameList.length) return;

    const parsedStyles = parseStyle(styles);

    const reusableClass = this.getReusableClassByStyle(parsedStyles);

    const [creatingClassList, usingClassList, reusingClassList] = makeStyleId({
      defClassName,
      useClassNameList,
      reusableClass,
      hasStyle: !!parsedStyles,
    });

    this.renderStyle({
      parsedStyles,
      isDefine: !!defClassName,
      styleId: creatingClassList,
    });

    this.addNewClass(creatingClassList, parsedStyles);

    removeAttributes({
      element,
      attributes: styles.map(({ name }) => `in-${name}`),
    });

    return creatingClassList
      .concat(usingClassList, reusingClassList)
      .join(' ')
      .trim();
  }

  renderStyle({ styleId, isDefine, parsedStyles }: RenderStylesArguments) {
    if (!styleId.length || !parsedStyles) return;

    const styleTagElement = isDefine
      ? this.stylinCustomStyleElement
      : this.stylinStyleElement;

    const generatedClassName = `.${styleId.join(`,\n.`)}`;

    styleTagElement!.innerHTML += `${generatedClassName} {\n ${parsedStyles} }\n`;
  }
}
